import React from 'react'
import { connect } from 'react-redux/'
import { GoSearch } from 'react-icons/go'
import './SearchForm.css'

import { searchMovies, fetchMovies, setLoading } from '../../actions/searchActions'


export const SearchForm = (props) => {


    const handleChange = (e) => {
        props.searchMovies(e.target.value);
        searchMovies('')

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.fetchMovies(props.text);
        props.setLoading();
    };

    return (
        <div>
            <div className="main--container">
                <div className="search--container">
                    <p className="display">
                        <GoSearch />
                        Search for a movie, TV series...
                    </p>
                    <form action="" id="searchForm" onSubmit={handleSubmit}  >
                        <input
                            type="text"
                            className="form-control"
                            name='searchText'
                            placeholder='Search for a movie, TV series...'
                            onChange={handleChange} />
                        <button className="btn-primary">
                            Search
                        </button>
                    </form>
                </div>
            </div >
        </div >
    )

}


const mapStateToProps = state => {
    return {
        text: state.movies.text
    }
}



export default connect(mapStateToProps, { searchMovies, fetchMovies, setLoading })(SearchForm)