import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard/MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import s from './MovieList.module.css';
import { LoadMore } from '../Loader/Loader';
import { homePageContext } from '../../App/App';


function MovieList () {
    const { filtered, setFiltered, addFavouriteMovie, isLoggedIn} = useContext (homePageContext);

    const [hasMore, setHasMore] = useState (true);

    const fetchMoreData = () => {
        if ( filtered.length <= 40 ) {
            setTimeout (() => {
                setFiltered (filtered.concat (filtered));
            }, 1000);
        } else {
            setHasMore (false)
        }

    }


    return (

        <Container style={{maxWidth: '1920px', minWidth: '220px'}}>
            {filtered.length !== 0 ? (
                <div style={{width: '100%'}}>
                    <InfiniteScroll
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<LoadMore/>}
                        dataLength={filtered.length}
                    >
                        <div className={s.infiniteScroll}>
                            <Row className={s.container} style={{overflowX: 'hidden'}}>
                                {filtered.map ((movie) => (
                                    <Col xs={12} sm={6} md={4} lg={3} key={movie.id * Math.random ()}>

                                        <MovieCard {...movie} addFavouriteMovie={addFavouriteMovie}
                                                   isLoggedIn={isLoggedIn}/>

                                    </Col>

                                ))}
                            </Row>
                        </div>
                    </InfiniteScroll>

                </div>
            ) : (
                <h2 style={{color: 'tomato', textDecoration: 'inherit'}}>
                    Not found any film by this filter parameters
                </h2>
            )}
        </Container>

    );
}


export default MovieList;