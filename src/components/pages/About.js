import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Row, Col } from 'react-grid-system';

function About() {
    return (
        <>
        <div className="section" id="about-section">
        <Header/>
            <div className="container" style={{minHeight: '90vh'}}>
                <h1 style={{textAlign: 'center', fontSize: '65px', padding: '50px'}}>About</h1>
                <Row style={{color: 'white'}}>
                    <Col lg={8}>
                        <h2 style={{fontSize: '30px'}}>What I used</h2>
                        <p className="paragraph">For this React movie app I used TMDB API to fetch the most popular movies at the moment. <br/><br/> The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by the community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and very impressive.</p>
                    </Col>
                    <Col style={{textAlign: 'center'}}>
                        <img src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" 
                        style={{border: '10px double #0ceafa', borderRadius: '50%', height: '250px', boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.26)'}}/>
                    </Col>
                </Row>
            </div>
        <Footer/>
        </div>
        </>
    )
}

export default About
