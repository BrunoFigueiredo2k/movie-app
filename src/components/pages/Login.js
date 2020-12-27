import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase.js";
import { AuthContext } from "../../Auth";
import '../../css/App.css'
import { Container, Row, Col } from 'react-grid-system';
import illustration from '../../images/illustration-cinema.svg';
import wave from '../../images/bg-wave.svg'
import { Link } from "react-router-dom"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  // If we have current user redirect to root path (home page)
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container fluid="md">
      <Row className="login">
      <Col className="illustration" style={{backgroundImage: `url(${wave})`}}>
        <img src={illustration} height={600}></img>
      </Col>
        <Col className="container login-form middle">
        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
          <label for="email">Email</label>
          <input name="email" type="email" placeholder="Email" required/>

          <label for="password">Password</label>
          <input name="password" type="password" placeholder="Password" required/>

          <button type="submit">Log in</button>
        </form>
        <p style={{textAlign: 'center'}}>No account yet? <Link to="/signup" className="link">Sign up</Link></p>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Login);