import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import './MovieCard.css'

import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    return (
        <div className='moviecard---container'>
            <div className="cardbody">
                <img src={movie.Poster} alt="Movie cover" className="ourmovies" />
                <h5 className="movie-title">
                    {movie.Title} - {movie.Year}
                </h5>
                <Link
                    className="btn btn-primary"
                    to={'movie/' + movie.imdbID}
                >
                    Movies Details
                <AiOutlineRight /></Link>
            </div>
        </div >
    )
}

export default MovieCard