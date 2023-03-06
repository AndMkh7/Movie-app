import React from 'react';
import s from './MovieCard.module.css';
import PropTypes from 'prop-types';
// import AddToFavourites from '../../AddToFavorites/AddToFavourites';
import {  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


MovieCard.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    addFavouriteMovie: PropTypes.func,
    overview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

const API_IMG = 'https://image.tmdb.org/t/p/w500';


function MovieCard ({title, poster_path, release_date, vote_average, id, addFavouriteMovie}) {

    const movie = {title, poster_path, release_date, vote_average, id, addFavouriteMovie}

    const navigate = useNavigate ();
    const handleClick = () => {
        navigate (`/movie/${id}`)
    }


    return (

        <div className={s.movieCard}>


                <div className={s.movieCardData}>
                    <div className={s.title}>{title}</div>
                    <div style={{position: 'relative'}}>
                        <img className={s.img} src={API_IMG + poster_path} alt={title} onClick={handleClick}/>
                        {/*<AddToFavourites addFavouriteMovie={addFavouriteMovie} movie={movie}/>*/}
                    </div>
                    <div className={s.aboutMovie}>
                        <div className={s.date}>{release_date}</div>
                        <div className={vote_average >= 7 ? s.highRate : s.rate}> {vote_average.toFixed (1)} </div>
                    </div>
                    <div className={s.buttons}>
                        <Button variant="outline-success" onClick={() => {
                            addFavouriteMovie (movie);
                            navigate (`/favourites`)
                        }}>AddToFav</Button>
                        <Button variant="outline-info" onClick={()=>navigate(`/movie/${id}`)}>Info</Button>
                    </div>
                </div>

        </div>
    )
}


export default MovieCard;

