import React, {useState} from 'react'
import {Row, Col} from 'react-grid-system';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import {useHistory, Route} from "react-router-dom";
import {IMG_BASE_URL} from '../strings'
import MovieDetails from '../MovieDetails'

export default function RecommendedCards(props) {
    // const history = useHistory();
    // const [similarClicked, setSimilarClicked] = useState(false);

    // // TODO: onclick image go to movie details
    // const seeMovieDetails = (movie) => {
    //     if (similarClicked){
    //         history.push(`/details/${movie.original_title}`, {...movie});
    //     }
    // }

    // seeMovieDetails();

    const cardDeck = (min, max) => {
        return (
            <CardDeck className="mt-3">
                {
                    props.similarMovies.map((similarMovie, index) => {
                        index += 1;
                        if (index > min && index <= max) {
                            return (
                                <Col style={{margin: '0', padding: '10px'}}>
                                <Card bg={'dark'} text={'white'} className="mt-4 mb-4">
                                    <Card.Img variant="top" src={IMG_BASE_URL + similarMovie.backdrop_path} />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight: '700', fontSize: '26px'}}>{similarMovie.title}</Card.Title>
                                        <Card.Text style={{lineHeight: '1.7em'}}>{similarMovie.overview.slice(0, 130) + " ..."}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Release date: {similarMovie.release_date}</small>
                                    </Card.Footer>
                                </Card>
                                </Col>
                            )
                        }
                    })
                }
            </CardDeck>
        )
    }

    return (
        <div>
            <br />
            <h2 className="title mt-5">Similar movies</h2>
            {cardDeck(0, 3)}
            {cardDeck(3, 6)}
        </div>
    )
}
