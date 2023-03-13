import React, { useContext } from 'react';
import MovieList from '../Main/MovieList';
import Footer from '../Footer/Footer';
import Filter from '../Filter/Filter';
import Loader from '../Loader/Loader';
import { homePageContext } from '../../App';




function HomePage () {
    const {loading} = useContext(homePageContext)

    return (

        loading ? <Loader loading={loading}/> :
            <div>
                <div>
                    <Filter/>
                    <MovieList  />
                    <Footer/>
                </div>
            </div>
    );
}


export default HomePage;
