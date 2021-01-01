import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'
import { Row, Col } from 'react-grid-system'
import Header from './layout/Header'
import VerticallyCenteredModal from './layout/VerticallyCenteredModal'
import Button from 'react-bootstrap/Button'
import { IMG_BASE_URL } from './strings'

const MovieDetails = () => {
    const location = useLocation()
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="movie-details section">
            <Header/>
            <div className="movie-backdrop-img" id="movie-backdrop-img" 
            style={{backgroundImage: `url(${IMG_BASE_URL + location.state.backdrop_path})`}}>
                <div className="wrapper">
                    <h1 className="movie-details-title">{location.state.original_title}</h1>
                    <span style={{fontSize: '30px', color: '#ccc', fontWeight: '600'}}> ({location.state.release_date.slice(0, 4)})</span>
                </div>
            </div>

            <div className="container">
                <Row>
                    <Col lg={3}>
                        <img src={IMG_BASE_URL + location.state.poster_path} className="movie-details-poster"></img>
                    </Col>
                    <Col>
                        <ul className="movie-details-top-stats horizontal-ul">
                            <li><span className="average-rating">{location.state.vote_average}</span></li>
                            <li><span style={{marginLeft: '-50px', fontSize: '18px', color: '#ccc'}}>/ {location.state.vote_count} votes</span></li>
                            <li><p className="tag">Popularity: <b>{Math.round(location.state.popularity)}</b></p></li>
                            <li><Button variant="success" onClick={() => setModalShow(true)}>Add to list</Button></li>
                        </ul>
                        <div className="movie-details-bottom-stats">
                            <p className="subtitle">Language:</p>
                            <p className="description" style={{fontSize: '14px', textTransform: 'uppercase'}}>{location.state.original_language}</p>
                            
                            <p className="subtitle">Release date:</p>
                            <p className="description" style={{fontSize: '14px'}}>{location.state.release_date}</p>
                            
                            <p className="subtitle">Description:</p>
                            <p className="description" style={{fontSize: '14px'}}>{location.state.overview}</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <VerticallyCenteredModal show={modalShow} movie={location.state} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default MovieDetails
