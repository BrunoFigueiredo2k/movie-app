import React, {useState, useEffect} from 'react';
import Movie from './Movie';
import {Row} from 'react-grid-system';
import MovieService from '../services/MovieService';

function MovieList(props) {
    const [genres, setGenres] = useState([]);

    // Get genres
    useEffect(() => {
        MovieService.getGenres().then(res => {
            setGenres(res.data.genres)
        })
        .catch(err => {
            console.log(err)
        })  
    }, []);

    return (
        <>
            <section fluid="md" className="movies-content">
                <Row>
                    {
                        props.movies.map(movie => {
                            return <Movie key={movie.id} movie={movie} genres={genres}/>
                        })
                    }
                </Row>
            </section>
        </>
    )
}

export default MovieList
