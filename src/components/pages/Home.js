import React, { useState, useEffect } from 'react';
import MovieList from '../MovieList';
import axios from 'axios'

const API_KEY = "da007e76d36aca68e174f2948e09389c"
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
        .then(res => {
            console.log(res.data.results)
            setMovies(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <div className="container">
            {movies ?
            <MovieList movies={movies}></MovieList>
             : <p>No movies</p>}
        </div>
    )
}

export default Home
