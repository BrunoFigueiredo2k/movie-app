import React from 'react'
import {Row, Col} from 'react-grid-system';
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className="landing-page">
            <div className="wrapper">
                <div className="container">
                    <Row>
                        <Col className="img-col">
                            <img src="https://i.pinimg.com/originals/1b/cd/fa/1bcdfa255e6dc496a5ebd759136f4b56.png"/>
                        </Col>
                        <Col>
                            <h1>Get a grip on your movie watch list!</h1>
                            <p>This app will make your life easier as you'll be able to keep track of your watched
                                movies to prevent confusion! Find your
                                <b style={{textDecoration: 'underline'}}>favorite movies</b>
                                and add them to your (wish)list signing up or logging into your account.
                            </p>
                            <Link to="/signup" className="cta">Signup</Link>
                            or
                            <Link to="/login" style={{marginLeft: '20px'}} className="cta cta-outline">Login</Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home
