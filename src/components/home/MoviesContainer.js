import React, { Component } from 'react'
import { connect } from 'react-redux'
import './MovieContainer.css'
import MovieCard from './MovieCard'

export class MoviesContainer extends Component {

    render() {
        const { movies } = this.props;
        let content = '';
        content = movies?.length > 0 ? movies.map((movie, index) => <MovieCard key=
            {index} movie={movie} />) : movies;
            
        return (
            <div className='movie--rows'>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})
export default connect(mapStateToProps)(MoviesContainer)