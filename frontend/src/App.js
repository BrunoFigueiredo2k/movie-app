import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MovieDetails from "./components/MovieDetails"
import Home from './components/pages/Home'
import Movies from './components/pages/Movies'
import About from './components/pages/About'
import Login from "./components/pages/Login"
import SignUp from "./components/pages/SignUp"
import {AuthProvider} from "./Auth"
import './css/App.css'
import {useSelector} from 'react-redux'
import {deleteMovie} from './redux/actions/index'

function App() {
    console.log(useSelector(state => state.loggedReducer))
    return (
        <>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/movies" component={Movies}/>
                        <Route path="/about" component={About}/>
                        <Route path="/details" component={MovieDetails}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                    </Switch>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App
