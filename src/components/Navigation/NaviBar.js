import React from 'react';
import './NaviBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';

// const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=<<api_key_here>>";
// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";
function NaviBar({query,searchMovie,changeHandler}) {

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
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
                                placeholder="Movie Search"
                                className="me-2"
                                aria-label="search"
                                name="query"
                                value={query} onChange={changeHandler}></FormControl>
                            <Button variant="secondary" type="submit" className="me-2">Search</Button>
                        <Nav>
                            <Button variant="primary"  className="me-2">LogIn</Button>
                            <Button variant="primary" className="me-2">LogOut</Button>
                        </Nav>



                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
}

export default NaviBar;

// import React, { useState } from 'react';
// import s from "./NaviBar.module.css";
// import logo from "./../../images/logo.png"
// import Login from './Login/Login';
//
// function NaviBar () {
//
//     const [isLoggedIn , setIsLoggedIn] = useState(true);
//
//
//
//     return (
//         <div className={s.header}>
//             <img className={s.logo} src={logo} alt="logo"/>
//             <div className={s.buttons}>
//
//                 {
//                     isLoggedIn ?
//                         <>
//                             <button className={s.btn}>Home</button>
//                             <button className={s.btn}>Favorites</button>
//                             <button className={s.btn} onClick={()=>{
//                                 setIsLoggedIn(false)
//                             }
//                             }>Logout</button>
//
//                         </>
//                         : <Login/>
//
//                 }
//
//
//             </div>
//
//         </div>
//     )
// }
//
// export  default NaviBar;