import React from 'react'
import { Row, Col } from 'react-grid-system';
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="landing-page">
            <div className="wrapper">
                <div className="container">
                    <Row>
                        <Col className="img-col"><img src="https://freesvg.org/img/hotpopcornmovie.png"/></Col>
                        <Col>
                        <h1>Get a grip on your movie watch list!</h1>
                    <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans</p>
                        <Link to="/signup" className="cta">Signup</Link> or <Link to="/login" style={{marginLeft: '20px'}} className="cta cta-outline">Login</Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home
