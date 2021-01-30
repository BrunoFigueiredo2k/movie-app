import React from 'react'
import {Row, Col} from 'react-grid-system';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import {IMG_BASE_URL} from '../strings'

export default function RecommendedCards(props) {
    console.log(props.similarMovies)

    return (
        <div>
            <br />
            <h2 className="title mt-5">Similar movies</h2>
            <Row className="mt-3">
                <CardDeck>
                    {
                        props.similarMovies.map((similarMovie, index) => {
                            index += 1;
                            console.log(index)
                            if (index <= 3) {
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
            </Row>
        </div>
    )
}
