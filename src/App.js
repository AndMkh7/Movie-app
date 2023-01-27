import './App.module.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import s from "./App.module.css"


function App() {

  return (
    <div className={s.App}>
            <div className={s.container}>
                <Header/>
                <SearchBar/>
                <Main/>
                <Footer/>
            </div>



    </div>
  );
}

export default App;
