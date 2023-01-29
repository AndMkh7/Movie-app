import React, { useEffect, useState } from 'react';
import  s from "./Main.module.css"
import MovieCard from './MovieCard/MovieCard';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=41c7736fada50851ecd6e23d73e02ef4";



function Main () {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch(API_URL)
            .then(
                response=>response.json())
            .then(data=>{
                    console.log(data.results);
                    setMovies(data.results)
                }
                )
    },[])

    return (
        <div className={s.main} >
            {movies.map((movie)=> <MovieCard key={movie.id} {...movie}/>)}
        </div>
    )
}

export  default Main;