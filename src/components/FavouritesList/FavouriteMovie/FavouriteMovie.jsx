import React from 'react';
import s from '../../Main/MovieCard/MovieCard.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { API_IMG } from '../../../constants/constants';



FavouriteMovie.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    addFavouriteMovie: PropTypes.func,
    id: PropTypes.number,
    removeFavouriteMovie: PropTypes.func
}



function FavouriteMovie ({title, poster_path, release_date, vote_average, id, removeFavouriteMovie}) {

    const movie = {id, title, release_date, vote_average, poster_path}

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
                </div>
                <div className={s.aboutMovie}>
                    <div className={s.date}>{release_date}</div>
                    <div className={vote_average >= 7 ? s.highRate : s.rate}> {vote_average} </div>
                </div>
                <div className={s.buttons}>
                    <Button variant="outline-danger" onClick={() => {
                        removeFavouriteMovie (movie);
                        navigate (`/favourites`)
                    }}>Remove</Button>
                    <Button variant="outline-info" onClick={() => navigate (`/movie/${id}`)}>Info</Button>
                </div>
            </div>

        </div>
    )
}


export default FavouriteMovie;