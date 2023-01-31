import React, { useEffect, useState } from 'react';
import './App.module.css';
import NaviBar from './components/Navigation/NaviBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import s from "./App.module.css"
import Filter from './components/Filter/Filter';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=41c7736fada50851ecd6e23d73e02ef4";


function App() {

    const [movies, setMovies]=useState([]);
    const [query, setQuery]=useState('');

    useEffect(() => {
        fetch(API_URL)
            .then((res)=>res.json())
            .then(data=>{
                console.log(data);
                setMovies(data.results);
            })
    }, [])


    const searchMovie = async(e)=>{
        e.preventDefault();
        console.log("Searching");
        try{
            const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            setMovies(data.results);
        }
        catch(e){
            console.log(e);
        }
    }

    const changeHandler=(e)=>{
        setQuery(e.target.value);
    }
  return (
      <div className={s.App} >

                <div className={s.container}>

                    <NaviBar query={query} searchMovie={searchMovie} changeHandler={changeHandler} />

                    <Filter/>

                    <Main movies ={movies}/>

                    <Footer/>

                </div>


      </div>
  );
}


export default App;
