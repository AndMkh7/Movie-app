import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { arrayRemove, doc, getDoc, updateDoc } from 'firebase/firestore';
import Footer from '../Footer/Footer';
import FavouriteMovie from './FavouriteMovie/FavouriteMovie';
import { auth, db } from '../../firebase-config';
import Loader from '../Loader/Loader';
import { naviBarContext } from '../../App';


function FavouritesList () {
    const { isLoggedIn} = useContext (naviBarContext);


    const navigate = useNavigate ();
    const [favourites, setFavourites] = useState ([]);
    const [isLoading, setIsLoading] = useState (false);
    const currentUser = auth.currentUser;

    const getFavourites = async (userId) => {

        const userRef = doc (db, 'users', userId);
        const userSnap = await getDoc (userRef);
        if ( userSnap.exists () ) {
            const favList = userSnap.data ().favourites;
            console.log ('Document data:', userSnap.data ());
            console.log ('FavList:', favList);
            return favList;
        } else {
            console.log ('No such document!');
        }
    };


    useEffect (() => {
        setIsLoading (true);
        const fetchFavourites = async () => {
            try {
                const favList = await getFavourites (currentUser.uid);
                setFavourites (favList);
                setIsLoading (false)

            } catch (error) {
                console.error ('Error fetching favourites: ', error);
            }
        };

        if ( !isLoggedIn ) {
            navigate ('/home');
        } else {
            fetchFavourites ();
        }
    }, [isLoggedIn, navigate, currentUser.uid, setFavourites]);


    const removeFavouriteMovie = async (movie) => {
        try {
            const currentUser = auth.currentUser;
            const uid = currentUser.uid;
            const userRef = doc (db, 'users', uid);
            const userSnap = await getDoc (userRef);

            console.log ('Movie was deleted', movie);

            await updateDoc (userRef, {
                favourites: arrayRemove (movie)
            });

            const favList = userSnap.data ().favourites;


            let newFavourites = favList.filter ((m) => m.id !== movie.id)

            console.log ('Favorites list after deleting:', newFavourites);
            setFavourites (newFavourites);


        } catch (error) {
            console.error (error);
        }
    };


    return (
        <>
            {
                isLoading ? <Loader/> :
                    <Container style={{maxWidth: '1920px', minWidth: '220px'}}>
                        {favourites.length !== 0 ? (
                            <div style={{width: '100%'}}>
                                <div>
                                    <Row style={{overflowX: 'hidden'}}>
                                        {favourites.map ((movie) => (
                                            <Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
                                                <FavouriteMovie {...movie} removeFavouriteMovie={removeFavouriteMovie}/>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        ) : (
                            <h2 style={{color: 'tomato', textDecoration: 'inherit'}}>
                                There is no any favourite movie in Your Favourite list
                            </h2>
                        )}
                    </Container>
            }

            <Footer/>
        </>
    );
}


export default FavouritesList;


