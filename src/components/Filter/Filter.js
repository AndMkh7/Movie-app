import React, { useEffect } from 'react';
import s from"./Filter.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Filter ({movies, genres, activeGenreId,setFiltered,setActiveGenreId}) {

    useEffect(()=>{

        if(activeGenreId === 0){
            setFiltered(movies);
            return;
        }
        const filtered = movies.filter((movie)=>movie.genre_ids.includes(activeGenreId));
        setFiltered(filtered);

    },[activeGenreId, movies, setFiltered])

    return (
        <div className={s.filter}>
            <button className={s.genres}  onClick={()=>setActiveGenreId(0)}>All Movies</button>
            {
                genres.map((genre)=>(
                    <button className={s.genres} key={genre.id} onClick={()=>setActiveGenreId(genre.id)}>{genre.name}</button>
                    )
                )
            }
        </div>
    )
}

export  default Filter;