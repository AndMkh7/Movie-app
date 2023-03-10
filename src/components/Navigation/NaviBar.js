import React, { useEffect, useState } from 'react';
import './NaviBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import usersPhoto from '../../images/user.png';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';


NaviBar.propTypes = {
    query: PropTypes.string,
    searchMovie: PropTypes.func,
    changeHandler: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    setIsLoggedIn: PropTypes.func
}


function NaviBar ({query, searchMovie, changeHandler, isLoggedIn, setIsLoggedIn}) {

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


    useEffect (() => {

        const fetchUserName = async () => {
            const auth = getAuth ();
            const currentUser = auth.currentUser;
            const uid = currentUser.uid;
            try {
                const userName = await getUserName (uid)
                setCurrentUserName (userName)

            } catch (error) {
                console.error ('Error fetching favourites: ', error);
            }
        };

        if ( !isLoggedIn ) {
            navigate ('/home');
        } else {
            fetchUserName ();
        }
    }, [isLoggedIn, setCurrentUserName]);

    const handleLogout = () => {
        const auth = getAuth ();

        signOut (auth)
            .then (() => {
                navigate ('/login');
                setIsLoggedIn (false);
            })
            .catch ((err) => {
                setError (err.message);
            });
    };
    return (
        <div>
            <>

                <Navbar bg="dark" expand="lg" variant="dark" style={{maxWidth: '1920px', minWidth: '220px'}}>
                    <Container fluid style={{minWidth: '200px'}}>
                        <Nav className="me-auto">
                            <Navbar.Brand href="/home">Home</Navbar.Brand>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/trending">Trending</Nav.Link>
                            {
                                isLoggedIn && <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
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
                                    placeholder="Search by keyword"
                                    className="me-2"
                                    aria-label="search"
                                    name="query"
                                    value={query} onChange={changeHandler}>
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
            <Outlet/>
        </div>
    );
}


export default NaviBar;

