import React, {useCallback} from "react";
import {withRouter} from "react-router";
import app from "../../firebase";
import {Link} from "react-router-dom"
import {Container, Row, Col} from 'react-grid-system';
import backgroundImg from '../../images/illustration-bg-watch-movies.jpg'
import PasswordInput from "../layout/PasswordInput"

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <Container fluid="md">
            <Row className="login">
                <Col className="illustration" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(30, 30, 48, 0.52), rgba(46, 175, 187, 0.7)), url(${backgroundImg})`,
                    backgroundSize: '100%'
                }}>
                </Col>
                <Col className="container login-form middle">
                    <h2>Sign up</h2>
                    <form onSubmit={handleSignUp}>
                        <label for="email">Email</label>
                        <input name="email" type="email" placeholder="Email" required/>

                        <PasswordInput/>

                        <button type="submit">Sign up</button>
                    </form>
                    <p style={{textAlign: 'center'}}>Already have an account?
                        <Link to="/login" className="link">Log in</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(SignUp);
