import React, { useState } from 'react';
import './NaviBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import usersPhoto from "../../images/user.png";

NaviBar.propTypes = {
    query: PropTypes.string,
    searchMovie: PropTypes.func,
    changeHandler: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    setIsLoggedIn: PropTypes.func
}


function NaviBar ({query, searchMovie, changeHandler, isLoggedIn, setIsLoggedIn}) {

    const [error, setError] = useState ('');
    const navigate = useNavigate ();
    const auth = getAuth ();

    const handleLogout = () => {
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
                                                <img src={usersPhoto} alt={"User`s image"} width="30" height="35" />
                                                <div style={{color:"snow"}}>Name</div>
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

