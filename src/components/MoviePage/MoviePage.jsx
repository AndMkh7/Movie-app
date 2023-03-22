import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './MoviePage.module.css';
import Loader from '../Loader/Loader';


function MoviePage () {
    const params = useParams ();
    const MOVIE_API = `https://api.themoviedb.org/3/movie/${params.id}?api_key=41c7736fada50851ecd6e23d73e02ef4`;
    const [movie, setMovie] = useState ({});

    useEffect (() => {
        fetch (MOVIE_API)
            .then ((res) => res.json ())
            .then (data => {
                setMovie (data);

            })
            .catch ((error) => <h1>{error}</h1>)

    }, []);

    const {poster_path, title,  overview, runtime, release_date, vote_average} = movie ;

        return (
            <>
                {
                    !vote_average ? <Loader/> :
                        <div>
                            <div className={s.movieInfo}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}
                                         style={{maxWidth: '100%', height: 'auto', objectFit: 'cover'}}/>

                                </div>
                                <div className={s.aboutMovie}>
                                    <h2 className={s.header}>{title}</h2>
                                    <p>{overview}</p>
                                    <p><b
                                        style={{textDecoration: 'underline solid rgba(255, 127, 252, 0.79)'}}>Runtime</b> : {runtime} minutes
                                    </p>
                                    <p><b style={{textDecoration: 'underline solid rgba(255, 127, 252, 0.79)'}}>Release
                                        date</b> : {release_date}</p>
                                    <p><b
                                        style={{textDecoration: 'underline solid rgba(255, 127, 252, 0.79)'}}>Rating</b> : {vote_average.toFixed(1)}
                                    </p>


                                </div>
                            </div>

                        </div>
                }
            </>


    );
}


export default MoviePage;
