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
            .then(data=>
                    setMovies(data.results))
            .catch(error => console.log("error", error))
    },[])

    return (
        <div className={s.main} >
            {movies ? movies.map((movie)=> <MovieCard key={movie.id} {...movie}/>): "No data"}
        </div>
    )
}

export  default Main;