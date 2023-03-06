import React from 'react';
import s from '../../Main/MovieCard/MovieCard.module.css';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';


FavouriteMovie.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    addFavouriteMovie: PropTypes.func,
    id: PropTypes.number,
    removeFavouriteMovie: PropTypes.func

}

const API_IMG = 'https://image.tmdb.org/t/p/w500';


function FavouriteMovie ({title, poster_path, release_date, vote_average, id, removeFavouriteMovie}) {

    const movie ={id, title, release_date, vote_average, poster_path}

    const navigate = useNavigate ();
    const handleClick = () => {
        navigate (`/movie/${id}`)
    }
    console.log ('ID', typeof (id));

    return (

        <div className={s.movieCard}>
            <Link to={`/movie/${id}`}>

                <div className={s.movieCardData}>
                    <div className={s.title}>{title}</div>
                    <div style={{position: 'relative'}}>
                        <img className={s.img} src={API_IMG + poster_path} alt={title} onClick={handleClick}/>
                    </div>
                    <div className={s.aboutMovie}>
                        <div className={s.date}>{release_date}</div>
                        <div className={vote_average >= 7 ? s.highRate : s.rate}> {vote_average.toFixed(1)} </div>
                    </div>
                </div>
            </Link>
            <button onClick={() => removeFavouriteMovie (movie)}>
                Remove
            </button>


        </div>
    )
}


export default FavouriteMovie;
