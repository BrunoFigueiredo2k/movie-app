import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/movies" className="header-link">
                            <h1 style={{margin: '0'}}>Movie App</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies" className="header-link">Movies</Link>
                    </li>
                    <li>
                        <Link to="/about" className="header-link">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="header-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}