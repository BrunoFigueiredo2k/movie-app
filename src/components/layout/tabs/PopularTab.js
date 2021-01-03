import React from 'react'
import MovieList from '../../MovieList'
import Carousel from 'react-bootstrap/Carousel'
import { IMG_BASE_URL } from '../../strings'

export default function PopularTab(props) {
    console.log(props)

    // Push amount of items passed in params to list.
    const carouselItems = (amountItems) => {
        const carouselItems = [];
        let i;
        for (i = 0; i < amountItems; i++){
            carouselItems.push(
                <Carousel.Item interval={5000} className="background-img-cover" style={{height: '400px', backgroundImage: `url(${IMG_BASE_URL + props.movies[i].backdrop_path})`}}> 
                    <div className="wrapper">
                        <Carousel.Caption className="carousel">
                            <h1 className="carousel-title">{props.movies[i].original_title}</h1>
                            <p className="carousel-description">{props.movies[i].overview.slice(0, 120) + " ..."}</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            );
        }
        return carouselItems
    }

    return (
        <>
        {props.movies.length ?
        <Carousel style={{maxHeight: '400px'}}>
            {carouselItems(5)}
        </Carousel> : null}
        <div className="container">
            <h1 className="heading-page" style={{paddingTop: '30px'}}>Popular movies</h1>
            {props.movies ?
            <MovieList movies={props.movies}></MovieList>
                : <p>No movies</p>}
        </div>
        </>
    )
}
