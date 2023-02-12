import React from 'react';
import './NaviBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {  Link  } from 'react-router-dom';



NaviBar.propTypes = {
    query: PropTypes.string,
    searchMovie: PropTypes.func,
    changeHandler: PropTypes.func,
}


function NaviBar ({query, searchMovie, changeHandler}) {

    return (
            <div>
                <>

                    <Navbar bg="dark" expand="lg" variant="dark" style={{maxWidth: '1920px', minWidth: '220px'}}>
                        <Container fluid style={{minWidth: '200px'}}>
                            <Nav className="me-auto">
                                <Navbar.Brand href="/">Home</Navbar.Brand>
                                <Nav.Link as={Link} to="/home">Trending</Nav.Link>
                                <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
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
                                        <Button variant="primary" className=" me-2  border-warning">LogIn</Button>
                                        <Button variant="primary" className=" me-2  border-warning">LogOut</Button>
                                    </Nav>

                                </Form>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </>

            </div>
    );
}


export default NaviBar;

