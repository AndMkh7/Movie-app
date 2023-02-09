import React, { useEffect } from 'react';
import s from './Filter.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';


const years = [
    2023,
    2022,
    2021,
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2004,
    2003,
    2002,
    2001,
    2000,
    1999,
    1998,
    1997,
    1996,
    1995,
    1994,
    1993,
    1992,
    1991,
    1990,
    1989,
    1988,
    1987,
    1986,
    1985,
    1984,
    1983,
    1982,
    1981,
    1980,
    1979,
    1978,
    1977,
    1976,
    1975,
    1974,
    1973,
    1972,
    1971,
    1970,
    1969,
    1968,
    1967,
    1966,
    1965,
    1964,
    1963,
    1962,
    1961,
    1960,
    1959,
    1958,
    1957,
    1956,
    1955,
    1954,
    1953,
    1952,
    1951,
    1950,
    1949,
    1948,
    1947,
    1946,
    1945,
    1944,
    1943,
    1942,
    1941,
    1940,
    1939,
    1938,
    1937,
    1936,
    1935,
    1934,
    1933,
    1932,
    1931,
    1930,
    1929,
    1928,
    1927,
    1926,
    1925,
    1924,
    1923,
    1922,
    1921,
    1920,
    1919,
    1918,
    1917,
    1916,
    1915,
    1914,
    1913,
    1912,
    1911,
    1910,
    1909,
    1908,
    1907,
    1906,
    1905,
    1904,
    1903,
    1902,
    1901,
    1900,
    1899,
    1898,
    1897,
    1896
];

Filter.propTypes = {
    movies: PropTypes.array,
    genres: PropTypes.array,
    activeGenreId: PropTypes.number,
    setFiltered: PropTypes.func,
    setActiveGenreId: PropTypes.func,
    filterByYearValue: PropTypes.string,
    setFilterByYearValue: PropTypes.func,
    // filtered:PropTypes.array
}


function Filter ({
                     movies,
                     genres,
                     activeGenreId,
                     setFiltered,
                     setActiveGenreId,
                     filterByYearValue,
                     setFilterByYearValue,
                     // filtered
                 }) {

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
            console.log("Was filtered by genre",activeGenreId )
        } else if ( activeGenreId === 0 && filterByYearValue ) {
            const filtered = movies.filter ((movie) => movie.release_date.slice (0, 4) === filterByYearValue.toString ());
            setFiltered (filtered);
            console.log("Was filtered by year",filterByYearValue )
        } else {
            const filteredByGenre = movies.filter ((movie) => movie.genre_ids.includes (activeGenreId));
            const filteredByAll = filteredByGenre.filter ((movie) => movie.release_date.slice(0, 4) === filterByYearValue.toString ());
            setFiltered (filteredByAll);
            console.log("Was filtered by all",filterByYearValue ,activeGenreId )
        }


    }, [activeGenreId, movies, setFiltered, filterByYearValue]);


    return (
        <div className={s.filter} style={{maxWidth: '1920px', minWidth: '220px'}}>
            <div>
                <button className={s.genreButton} key={Math.random()}
                        onClick={() => setActiveGenreId (0)}>All Movies</button>
                {
                    genres.map ((genre) => (
                            <button className={s.genreButton} key={genre.id}
                                    onClick={() => setActiveGenreId (genre.id)}>{genre.name}</button>
                        )
                    )
                }
            </div>
            <div  style={{margin: '3px'}}>
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