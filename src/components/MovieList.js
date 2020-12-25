import React from 'react';
import Movie from './Movie';
import { Container, Row } from 'react-grid-system';
import '../css/App.css'

function MovieList(props) {
    return (
        <>
        <Container fluid="md" className="movies-content">
            <Row>
                {
                    props.movies.map(movie =>{
                        return <Movie key={movie.id} movie={movie}/>
                    })
                }
            </Row>
        </Container>
        </>
    )
}

export default MovieList
