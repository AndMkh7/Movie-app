import React from 'react';
import  s from "./MovieCard.module.css";

const API_IMG = "https://image.tmdb.org/t/p/w500" ;

function MovieCard ({title,poster_path,release_date,vote_average}) {
    return (
        <div className={s.movieCard}>
            <h6 className={s.title}>{title}</h6>
            <img className={s.img} src={API_IMG+poster_path}  alt={title}/>
            <div className={s.aboutMovie}>
                <div className={s.date}>{release_date}</div>
                <div className={s.rate}>{vote_average}</div>
            </div>
        </div>
    )
}

export  default MovieCard;

