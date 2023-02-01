import React, { useEffect, useState } from 'react';
import './App.module.css';
import NaviBar from './components/Navigation/NaviBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import s from "./App.module.css"
import Filter from './components/Filter/Filter';



const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=41c7736fada50851ecd6e23d73e02ef4";
// const API_SEARCH = "https://api.themoviedb.org/3/search/company?api_key=41c7736fada50851ecd6e23d73e02ef4&query";
const API_SEARCH2="https://api.themoviedb.org/3/search/movie?api_key=41c7736fada50851ecd6e23d73e02ef4&language=en-US&page=1&include_adult=false&query"
function App() {

    const [movies, setMovies]=useState([]);
    const [searchText, setSearchText]=useState('');

    useEffect(() => {
        fetch(API_URL)
            .then((res)=>res.json())
            .then(data=>{
                console.log(data);
                setMovies(data.results);
            })
    }, []);


    const searchMovie = async(event)=>{
        event.preventDefault();
        console.log("Searching");
        try{
            const url= API_SEARCH2 + "=" + searchText;
            const searchRes= await fetch(url);
            const searchData= await searchRes.json();
            console.log("search data",searchData);
            if(searchData.results.length === 0){
                console.log("No data with your searching text")
            } else{
                setMovies(searchData.results);
            }

            setSearchText("");
        }
        catch(error){
            console.log(error);
        }
    }



    const changeHandler=(e)=>{
        setSearchText(e.target.value);

    };



    return (

      <div className={s.App} >

                <div className={s.container}>

                    <NaviBar query={searchText} searchMovie={searchMovie} changeHandler={changeHandler} />

                    <Filter/>

                    <Main movies ={movies}/>

                    <Footer/>

                </div>


      </div>
  );
}


export default App;
