import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import MovieDetails from "./components/MovieDetails"
import Home from './components/pages/Home'
import About from './components/pages/About'
import Login from "./components/pages/Login"
import SignUp from "./components/pages/SignUp"
import { AuthProvider } from "./Auth"
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css'

function App(){
  return (
    <>
    <AuthProvider>
      <Router>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details" component={MovieDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App
