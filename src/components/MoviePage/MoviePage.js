import React from 'react';
import s from './MoviePage.module.css';


function MoviePage () {
    return (
        <div className={s.container}>
            <div className={s.movieCard}>
                <div className={s.image}>
                    Movie Photo
                </div>
                <div className={s.movieInfo}>
                    <h1>About Movie</h1>
                </div>
            </div>
        </div>
    );
}


export default MoviePage;