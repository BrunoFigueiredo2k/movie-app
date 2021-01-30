import React, {useRef, useState} from "react";
import {MDBCol, MDBIcon} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import MovieService from '../services/MovieService';

const SearchBar = (props) => {
    const searchVal = useRef(null);

    const searchMovies = () => {
        let currentVal = searchVal.current.value;
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
                       aria-label="Search"
                       onKeyDown={handleKeyDownEnter} ref={searchVal} value={props.searchVal}/>
                <MDBIcon
                    style={{color: 'black', marginLeft: '-45px', filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .2))'}}
                    icon="search" size="2x"
                    onClick={searchMovies}/>
            </form>
        </MDBCol>
    );
}

export default SearchBar;