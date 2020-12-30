import React from 'react'
import MovieList from '../../MovieList'

export default function PopularTab(props) {
    return (
        <div className="container">
            <h1 className="heading-page">Popular movies</h1>
            {props.movies ?
            <MovieList movies={props.movies}></MovieList>
                : <p>No movies</p>}
        </div>
    )
}
