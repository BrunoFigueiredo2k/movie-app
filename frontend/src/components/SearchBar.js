import React, {useRef, useState} from "react";
import {MDBCol, MDBIcon} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import MovieService from '../services/MovieService';

const SearchBar = (props) => {
    const searchValue = useRef(props.searchVal);
    
    const searchMovies = () => {
        let currentVal = searchValue.current.value;
        props.setSearchVal(currentVal);

        if (currentVal !== ''){
            // api call
            MovieService.searchMoviesByTitle(currentVal)
                .then(res => {
                    props.setSearchedMovies(res.data.results);
                })
                .catch(err => {
                    alert(err);
                    console.log(err);
                })
        } else {
            props.setDisplayMessage({
                display: true,
                type: 'failure',
                content: 'There is no input. Make sure you type something first!'
            })
        }
    };

    const handleKeyDownEnter = (e) => {
        if (e.key === 'Enter') {
            searchMovies();
            e.preventDefault();
        }
    }

    return (
        <MDBCol md="12" style={{padding: '0'}}>
            <form className="form-inline mt-6">
                <input className="form-control form-control-lg w-100" type="text" placeholder="Search"
                       aria-label="Search" onKeyDown={handleKeyDownEnter} ref={searchValue}/>
                <MDBIcon className="search-btn" icon="search" size="2x" onClick={searchMovies}/>
            </form>
        </MDBCol>
    );
}

export default SearchBar;