import React, { useContext, useEffect } from 'react';
import s from './Filter.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { homePageContext } from '../../App/App';
import { years } from '../../constants/constants';




function Filter () {
    const {
        movies,
        genres,
        activeGenreId,
        setFiltered,
        setActiveGenreId,
        filterByYearValue,
        setFilterByYearValue
    } = useContext(homePageContext)


    const onFilterDateValue = (event) => {
        setFilterByYearValue (event.target.value);
        console.log (event.target.value);
    }


    useEffect (() => {

        if ( activeGenreId === 0 && filterByYearValue === 'all' ) {
            setFiltered (movies);

        } else if ( activeGenreId !== 0 && filterByYearValue === 'all' ) {
            const filtered = movies.filter ((movie) => movie.genre_ids.includes (activeGenreId));
            setFiltered (filtered);
            console.log ('Was filtered by genre', activeGenreId)
        } else if ( activeGenreId === 0 && filterByYearValue ) {
            const filtered = movies.filter ((movie) => movie.release_date.slice (0, 4) === filterByYearValue.toString ());
            setFiltered (filtered);
            console.log ('Was filtered by year', filterByYearValue)
        } else {
            const filteredByGenre = movies.filter ((movie) => movie.genre_ids.includes (activeGenreId));
            const filteredByAll = filteredByGenre.filter ((movie) => movie.release_date.slice (0, 4) === filterByYearValue.toString ());
            setFiltered (filteredByAll);
            console.log ('Was filtered by all', filterByYearValue, activeGenreId)
        }


    }, [activeGenreId, movies, setFiltered, filterByYearValue]);


    return (
        <div className={s.filter} style={{maxWidth: '1920px', minWidth: '220px'}}>


            <div>
                <button className={`${s.genreButton} ${activeGenreId === 0 ? s.active : ''}`} key={Math.random ()}
                        onClick={() => setActiveGenreId (0)}>All Movies
                </button>
                {
                    genres.map ((genre) => (
                            <button className={`${s.genreButton} ${activeGenreId === genre.id ? s.active : ''}`}
                                    key={genre.id}
                                    onClick={() => setActiveGenreId (genre.id)}>{genre.name}</button>
                        )
                    )
                }
            </div>
            <div style={{margin: '3px'}}>
                <>
                    <label htmlFor="year-select" style={{color: 'snow'}}>Choose a year : </label>
                </>


                <select className={s.selectYear} name="format" id="format" onChange={onFilterDateValue}>
                    <option value="all">All</option>
                    {
                        years.map ((year) =>
                            <option value={year} key={year}>{year}</option>
                        )
                    }
                </select>

            </div>

        </div>
    )
}


export default Filter;