import React, { useContext, useEffect, useState } from 'react';
import './NaviBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import usersPhoto from '../../images/user.png';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { naviBarContext } from '../../App/App';
import Footer from '../Footer/Footer';




function NaviBar () {

    const { searchMovie, changeHandler, isLoggedIn, setIsLoggedIn , searchText } = useContext (naviBarContext);

    const [error, setError] = useState ('');
    const [currentUserName, setCurrentUserName] = useState ('');
    const navigate = useNavigate ();

    const getUserName = async (userId) => {

        const userRef = doc (db, 'users', userId);
        const userSnap = await getDoc (userRef);
        if ( userSnap.exists () ) {
            const userName = userSnap.data ().name;
            const userSurname = userSnap.data ().surname;

            console.log ('Document data:', userSnap.data ());
            console.log ('User Name is :', userName);
            console.log ('User Surname is :', userSurname);
            return userName.slice (0, 3) + userSurname.slice (0, 3)


        } else {
            console.log ('No such document!');
        }

    };


    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const auth = await getAuth();
                auth.onAuthStateChanged(async (user) => {
                    if ( user ) {
                        const userName = await getUserName (user.uid)
                        setCurrentUserName (userName)
                    } else {
                        navigate ('/home');
                    }
                });
            } catch (error) {
                console.error('Error fetching favourites: ', error);
            }
        };

        fetchUserName().then(r => r);
    }, []);

    const handleLogout = () => {
        const auth = getAuth ();

        signOut (auth)
            .then (() => {
                navigate ('/login');
                setIsLoggedIn (false);
                localStorage.setItem('isLoggedIn', 'false')
            })
            .catch ((err) => {
                setError (err.message);
            });
    };
    return (
        <div  >
            <>

                <Navbar bg="dark" expand="lg" variant="dark" style={{maxWidth: '1920px', minWidth: '220px'}}>
                    <Container fluid style={{minWidth: '200px'}}>
                        <Nav className="me-auto">
                            <Navbar.Brand href="/">Icon</Navbar.Brand>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/trending">Trending</Nav.Link>
                            {
                                isLoggedIn  && <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
                            }

                        </Nav>

                        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-3"
                                style={{maxHeight: '100px'}}
                                navbarScroll></Nav>

                            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
                                <FormControl
                                    type="search"
                                    placeholder="Search movie..."
                                    className="me-2"
                                    aria-label="search"
                                    name="query"
                                    value={searchText} onChange={changeHandler}>
                                </FormControl>
                                <Button variant="secondary" type="submit" className="me-2">Search</Button>


                                <Nav>

                                    {
                                        isLoggedIn ?
                                            <>
                                                <Link to="/logout">
                                                    {error && <h4>{error}</h4>}
                                                    <Button variant="primary" className=" me-2  border-warning"
                                                            onClick={handleLogout}>LogOut</Button>
                                                </Link>
                                                <img src={usersPhoto} alt={'User`s image'} width="30" height="35"/>
                                                <div style={{color: 'snow'}}>{currentUserName}</div>
                                            </>

                                            :
                                            <>
                                                <Link to="/login">
                                                    <Button variant="primary"
                                                            className=" me-2  border-warning">LogIn</Button>
                                                </Link>


                                                <Link to="/signup">
                                                    <Button variant="primary"
                                                            className=" me-2  border-warning">SignUp</Button>
                                                </Link>
                                            </>
                                    }


                                </Nav>

                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
            <main >
                <Outlet />

            </main>
            <Footer/>

        </div>
    );
}


export default NaviBar;

