import React from 'react'
import '../css/App.css'
import { Col, Row } from 'react-grid-system';

function Footer() {
    return (
        <footer>
            <div className="container">
                <Row>
                    <Col lg={8}>
                    <h2>Made by: <span style={{marginLeft: '10px'}}>Bruno Figueiredo 😎</span></h2>
                    <ul className="horizontal-ul">
                        <li><a href="https://github.com/BrunoFigueiredo2k" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href="http://bruno-figueiredo.nl/" target="_blank" rel="noreferrer">Personal website</a></li>
                        <li><a href="https://www.linkedin.com/in/bruno-figueiredo-953906177/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
                    </Col>
                    <Col>
                        <h1 style={{float: 'right', fontSize: '50px', margin: '0', lineHeight: '120px'}}>🍿🎥</h1>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer
