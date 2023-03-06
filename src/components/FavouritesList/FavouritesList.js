import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { doc , getDoc } from 'firebase/firestore';
import Footer from '../Footer/Footer';
import FavouriteMovie from './FavouriteMovie/FavouriteMovie';
import PropTypes from 'prop-types';
import { auth, db } from '../../firebase-config';


FavouritesList.propTypes = {
    isLoggedIn: PropTypes.bool,
    removeFavouriteMovie:PropTypes.func
}


function FavouritesList ({isLoggedIn , removeFavouriteMovie}) {
    const navigate = useNavigate ();

    const [favourites, setFavourites] = useState ([]);

    const currentUser = auth.currentUser;
    // const uid = currentUser.uid;


    const getFavourites = async (userId) => {

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            const favList = userSnap.data().favourites;
            console.log("Document data:", userSnap.data());
            console.log("FavList:", favList);
            return favList ;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    };



    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const favList = await getFavourites(currentUser.uid);
                setFavourites(favList);
            } catch (error) {
                console.error("Error fetching favourites: ", error);
            }
        };

        if (!isLoggedIn) {
            navigate("/home");
        } else {
            fetchFavourites();
        }
    }, [isLoggedIn, navigate, currentUser.uid, setFavourites]);

    if (favourites.length === 0) {
        return <div style={{color:"red"}}>Loading...</div>;
    }



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


