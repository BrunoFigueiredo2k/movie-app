import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-grid-system'
import MovieDetails from './MovieDetails'
import { useHistory, Route } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"

function Movie(props) {
    const history = useHistory();

    const learnMoreMovie = () => {
        const clickedMovie = props.movie
        console.log(clickedMovie)
        history.push(`/details/${props.movie.original_title}`, {...clickedMovie});
    }

    return (
        <>
        <Col style={{margin: '20px 0'}}>
            <Route
                path={`details/${props.movie.original_title}`}
                render={props => (
                    <MovieDetails {...props} movie={props.movie} />
                )}
            />
            <div className="card-movie">
                <img className="poster-img" onClick={learnMoreMovie} src={IMG_BASE_URL + props.movie.poster_path}></img>
                <p className="title">{props.movie.original_title}</p>
                <p className="genres">{props.movie.genre_ids.map(id => { return id + " "})}</p>
            </div>
        </Col>
        </>
    )
}

export default Movie