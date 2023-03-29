import React  from 'react';
import s from './MovieCard.module.css';
import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { API_IMG } from '../../../constants/constants';

MovieCard.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    addFavouriteMovie: PropTypes.func,
    overview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isLoggedIn : PropTypes.bool
}




function MovieCard ({title, poster_path, release_date, vote_average, id, addFavouriteMovie, isLoggedIn}) {

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
                    </div>
                    <div className={s.aboutMovie}>
                        <div className={s.date}>{release_date}</div>
                        <div className={vote_average >= 7 ? s.highRate : s.rate}> {vote_average.toFixed (1)} </div>
                    </div>


                    {
                        isLoggedIn ?
                            <div className={s.buttons}>
                                <Button variant="outline-success" onClick={() => {
                                    addFavouriteMovie (movie);
                                }}>AddToFav</Button>
                                <Button variant="outline-info" onClick={handleClick}>Info</Button>
                            </div> :
                            <Button variant="outline-info"  style={{
                                marginTop: '3px',
                                color: '#fff',
                                borderRadius: '5px',
                                padding: '10px 20px',
                                fontSize: '16px',
                            }} onClick={handleClick}>Info</Button>
                    }
                </div>

        </div>
    )
}


export default MovieCard;

