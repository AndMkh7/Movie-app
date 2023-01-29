import React  from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import s from "./App.module.css"
import Filter from './components/Filter/Filter';


function App() {

  return (
      <div className={s.App} >


                <div className={s.container}>

                    <Header/>
                    <div className={s.toolBar}>
                        <Filter/>
                        <SearchBar/>
                    </div>

                    <Main/>
                    <Footer/>
                </div>


      </div>
  );
}


export default App;
