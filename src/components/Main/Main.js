// import React from 'react';
// import  s from "./Main.module.css"
// import MovieCard from './MovieCard/MovieCard';
//
//
//
//
// function Main ({movies}) {
//
//     return (
//         <div className={s.main} >{
//             movies.map((movie)=> <MovieCard key={movie.id} {...movie}/>)
//         }
//
//         </div>
//     )
// }
//
// export  default Main;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MovieCard from './MovieCard/MovieCard';

function Main({  filtered }) {
    return (
        <Container className="main">
            {
                filtered.length !== 0 ?
                    <Row>

                        {filtered.map((movie) => (
                            <Col  xs={12} sm={6} md={4} lg={3} key={movie.id}>
                                <MovieCard {...movie} />
                            </Col>

                        ))}
                    </Row> : "No any film by this filter parameters  "
            }
        </Container>
    );
}

export default Main;