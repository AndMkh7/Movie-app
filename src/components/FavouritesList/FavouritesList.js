import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../Footer/Footer';
import FavouriteMovie from './FavouriteMovie/FavouriteMovie';
import PropTypes from 'prop-types';
import { db } from '../../firebase-config';


FavouritesList.propTypes = {
    isLoggedIn: PropTypes.bool,
    removeFavouriteMovie:PropTypes.func
}


function FavouritesList ({isLoggedIn , removeFavouriteMovie}) {
    const navigate = useNavigate ();

    const [favourites, setFavourites] = useState ([]);


    const getFavourites = async () => {
        try {
            const querySnapshot = await getDocs (collection (db, 'users'));
            const favList = querySnapshot.docs.map ((doc) => doc.data ().favourites);
            setFavourites (favList.flat ());
        } catch (error) {
            console.error ('Error fetching favourites: ', error);
        }
    };

    useEffect (() => {
        if ( !isLoggedIn ) {
            navigate ('/home');
        } else {
            getFavourites ().then (r => console.log (r));
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <Container style={{maxWidth: '1920px', minWidth: '220px'}}>
                {favourites.length !== 0 ? (
                    <div style={{width: '100%'}}>
                        <div>
                            <Row style={{overflowX: 'hidden'}}>
                                {favourites.map ((movie) => (
                                    <Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
                                        <FavouriteMovie {...movie} removeFavouriteMovie={removeFavouriteMovie} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                ) : (
                    <h2 style={{color: 'tomato', textDecoration: 'inherit'}}>
                        Not any favourite movie in Your Favourite list
                    </h2>
                )}
            </Container>
            <Footer/>
        </>
    );
}


export default FavouritesList;