import React from "react"
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Home from '../components/pages/Home'
import Dashboard from '../components/pages/Dashboard'
import About from '../components/pages/About'
import '../css/App.css'
import MovieDetails from "../components/MovieDetails"

export default function Header() {
  return (
    <Router>
      <div className="header">
        <div className="container">
            <ul>
                <li>
                  <Link to="/" className="header-link">
                  <h1 style={{margin: '0'}}>Movie App</h1>
                  </Link>
                </li>
              <li>
                <Link to="/" className="header-link">Popular</Link>
              </li>
              <li>
                <Link to="/about" className="header-link">About</Link>
              </li>
              <li>
                <Link to="/dashboard" className="header-link">Dashboard</Link>
              </li>
            </ul>
        </div>
      </div>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/details">
            <MovieDetails />
          </Route>
        </Switch>
    </Router>
  );
}