import React from 'react'
import { Col } from 'react-grid-system'
import MovieDetails from './MovieDetails'
import { useHistory, Route } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"

function Movie({movie, genres}) {
    const history = useHistory();
    const genreNames = []
    const genreIds = []

    const learnMoreMovie = () => {
        const clickedMovie = movie
        history.push(`/details/${movie.original_title}`, {...clickedMovie});
    }

    // Push genre ids of this movie to array
    movie.genre_ids.map(id => genreIds.push(id))

    // Map through all possible genres for id and name
    genres.map(genre => {
        genreIds.map(id => {
            if (id === genre.id){
                genreNames.push(genre.name)
            }
            return true
        })
        return true
    })

    const genresLen = genreNames.length

    return (
        <>
        <Col style={{margin: '20px 0'}}>
            <Route
                path={`details/${movie.original_title}`}
                render={movie => (
                    <MovieDetails {...movie} movie={movie} />
                )}
            />
            <div className="card-movie">
                <img className="poster-img" onClick={learnMoreMovie} src={IMG_BASE_URL + movie.poster_path}></img>
                <p className="title">{movie.original_title}</p>
                <p className="genres">{genreNames.map((name, i) => {
                    // Last item in array with no comma
                    if (genresLen === i + 1) {
                        return name
                    } else {
                        return name + ", "
                    }
                })}
                </p>
            </div>
        </Col>
        </>
    )
}

export default Movie