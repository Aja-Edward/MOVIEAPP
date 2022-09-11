import React from 'react'
import { useSelector } from 'react-redux'
import './MovieContainer.css'
import MovieCard from './MovieCardFunctional'

const MoviesContainer = () => {
    const { movies } = useSelector(state => state.movies)
    return (
        <div className='movie--rows'>
            {movies?.length > 0 ?
                movies.map((movie, index) =>
                    <MovieCard key={index} movie={movie} />
                ) : null
            }
        </div>
    )

}


export default MoviesContainer