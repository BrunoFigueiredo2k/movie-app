import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import { Container, Row } from 'react-grid-system';
import axios from 'axios'

const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_MOVIEDB}&language=en-US`

function MovieList(props) {
    const [genres, setGenres] = useState([]);

    // Get genres
    useEffect(() => {
        axios.get(genresUrl)
        .then(res => {
            setGenres(res.data.genres)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <>
        <Container fluid="md" className="movies-content">
            <Row>
                {
                    props.movies.map(movie =>{
                        return <Movie key={movie.id} movie={movie} genres={genres}/>
                    })
                }
            </Row>
        </Container>
        </>
    )
}

export default MovieList
