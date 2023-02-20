import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import s from './MoviePage.module.css';


function MoviePage () {
    const params = useParams ();
    const MOVIE_API = `https://api.themoviedb.org/3/movie/${params.id}?api_key=41c7736fada50851ecd6e23d73e02ef4`;
    const [movie, setMovie] = useState ({});

    useEffect (() => {
        fetch (MOVIE_API)
            .then ((res) => res.json ())
            .then (data => {
                setMovie (data);
                data.genres.map((genre)=>genre.name)

            })
            .catch((error)=><h1>{error}</h1>)

    }, []);



    return (
        <div>
            <div className={s.movieInfo}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}
                         style={{maxWidth: '100%', height: 'auto', objectFit: 'cover'}}/>

                </div>
                <div >
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p><b>Runtime</b> : {movie.runtime} minutes</p>
                    <p><b>Release</b> date : {movie.release_date}</p>
                    <p> <b>Rating</b> : {movie.vote_average}</p>


                </div>
            </div>
            <Footer/>

        </div>
    );
}


export default MoviePage;
