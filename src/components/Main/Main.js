import React from 'react';
import  s from "./Main.module.css"
import MovieCard from './MovieCard/MovieCard';


function Main ({movies}) {

    return (
        <div className={s.main} >{
            movies.map((movie)=> <MovieCard key={movie.id} {...movie}/>)
        }

        </div>
    )
}

export  default Main;