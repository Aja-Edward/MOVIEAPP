import React from 'react'
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';
import { useSelector } from 'react-redux';
import './LandingPage.css'
import MoviesContainer from './MoviesContainer';


const Landingpage = () => {
    const {loading} = useSelector(state => state.movies);
    return (
        <div className='landing-container'>
            <SearchForm />
            {loading ? <Spinner /> : <MoviesContainer />}
        </div>
    )
    
}

export default Landingpage