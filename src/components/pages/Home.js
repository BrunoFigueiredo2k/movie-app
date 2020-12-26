import React, { useState, useEffect } from 'react';
import MovieList from '../MovieList';
import axios from 'axios'
import app from '../../firebase'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_MOVIEDB}&language=en-US&page=1`;

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
        <div>
            <div className="section">
            <Header/>
                <button onClick={() => app.auth().signOut()}>Sign out</button>
                {movies ?
                <MovieList movies={movies}></MovieList>
                 : <p>No movies</p>}
            </div>
             <Footer/>
        </div>
    )
}

export default Home
