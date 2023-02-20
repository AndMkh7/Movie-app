import React from 'react';
import MovieList from '../Main/MovieList';
import Footer from '../Footer/Footer';
import s from './HomePage.module.css'
import Filter from '../Filter/Filter';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';


HomePage.propTypes = {
    API_URL: PropTypes.string,
    movies: PropTypes.array,
    genres: PropTypes.array,
    filtered: PropTypes.array,
    searchText: PropTypes.string,
    loading: PropTypes.bool,
    activeGenreId: PropTypes.number,
    setFiltered: PropTypes.func,
    setActiveGenreId: PropTypes.func,
    filterByYearValue: PropTypes.string,
    setFilterByYearValue: PropTypes.func,
    changeHandler: PropTypes.func,
    searchMovie: PropTypes.func,
}


function HomePage ({
                       API_URL, movies, genres, filtered, loading, activeGenreId,
                       filterByYearValue, setFiltered, setActiveGenreId, setFilterByYearValue,
                   }) {


    return (

        loading ? <Loader loading={loading}/> :
            <div className={s.homePage}>

                <div className={s.container}>


                    <Filter movies={movies} filtered={filtered} genres={genres} activeGenreId={activeGenreId}
                            setActiveGenreId={setActiveGenreId} setFiltered={setFiltered}
                            filterByYearValue={filterByYearValue} setFilterByYearValue={setFilterByYearValue}
                    />

                    <MovieList filtered={filtered} API_URL={API_URL} setFiltered={setFiltered}/>

                    <Footer/>

                </div>

            </div>


    );
}

 
export default HomePage;
