import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie } from '../../actions/searchActions'
import './Movie.css'

const Movie = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            dispatch(fetchMovie(id))
        })()
        // eslint-disable-next-line
    }, [id])

    const { movie } = useSelector(state => state.movies)

    return (
        <>
            <div className="movie--container">
                <div className="card--body">
                    <img src={movie?.Poster} alt={movie?.Title} className="thumbnail" />
                </div>
                <div className="movie--info">
                    <h2 className="movie--title">{movie?.Title}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Genre:</strong> {movie?.Genre}
                        </li>
                        <li className="list-group-item">
                            <strong>Released:</strong>{movie?.Released}
                        </li>
                        <li className="list-group-item">
                            <strong>Stars:</strong>{movie?.Stars}
                        </li>
                        <li className="list-group-item">
                            <strong>Writer:</strong> {movie?.Writer}
                        </li>
                        <li className="list-group-item">
                            <strong>Director:</strong> {movie?.Director}
                        </li>
                        <li className="list-group-item">
                            <strong>Rated:</strong> {movie?.Rated}
                        </li>
                        <li className="list-group-item">
                            <strong>IMDB Rating:</strong> {movie?.imdbRating}
                        </li>
                        <li className="list-group-item">
                            <strong>Actors:</strong> {movie?.Actors}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="movie--subcontainer">
                <div className="about--movie">
                    <h3>About</h3>
                    <hr />
                    <div className='paragram--about'>The Nigerian government is interested in those ready watch movies on this site.
                        Check through the movie options on our landing page to make your choice today
                    </div>

                    <a href='https://www.imdb.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='button-about'>
                        View on  IMDB
                    </a>
                    <Link to={'/'} className="button-default text-light">
                        Go back to Search
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Movie