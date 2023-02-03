import React from 'react';
import './NaviBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


NaviBar.propTypes={
    query:PropTypes.string,
    searchMovie:PropTypes.func,
    changeHandler:PropTypes.func,

}


function NaviBar({query,searchMovie,changeHandler}) {

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" style={{maxWidth:'1920px',minWidth:'220px'}}>
                <Container fluid style={{minWidth:'200px'}}>
                       <Navbar.Brand href="/home">Home</Navbar.Brand>
                       <Navbar.Brand href="/home">Trending</Navbar.Brand>
                       <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-3"
                            style={{maxHeight:'100px'}}
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
                            <Button variant="primary"  className=" me-2  border-warning">LogIn</Button>
                            <Button variant="primary"  className=" me-2  border-warning" >LogOut</Button>
                        </Nav>

                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
}

export default NaviBar;

