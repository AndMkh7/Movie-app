import React from 'react';
import s from"./SearchBar.module.css";
import Filter from '../Filter/Filter';

function SearchBar () {
    return (
        <div className={s.searchBar}>
            <Filter/>
            Searchbar
        </div>
    )
}

export  default SearchBar;