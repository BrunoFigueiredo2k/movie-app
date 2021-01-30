import React, {useState} from 'react'
import MovieList from '../../MovieList'
import Carousel from 'react-bootstrap/Carousel'
import {IMG_BASE_URL} from '../../strings'
import SearchBar from '../../SearchBar'
import ConfirmationMessage from '../ConfirmationMessage';
import {checkIfDisplayMesssageChanged} from '../../utils';

export default function PopularTab(props) {
    const [searchVal, setSearchVal] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [displayMessage, setDisplayMessage] = useState({
        display: false,
        type: '',
        content: ''
    });

    console.log(searchedMovies);
    console.log(searchVal);
    console.log(props.movies);  

    // Push amount of items passed in params to list.
    const carouselItems = (amountItems) => {
        const carouselItems = [];
        let i;
        for (i = 0; i < amountItems; i++) {
            carouselItems.push(
                <Carousel.Item interval={5000} className="background-img-cover" style={{
                    height: '400px',
                    backgroundImage: `url(${IMG_BASE_URL + props.movies[i].backdrop_path})`
                }}>
                    <div className="wrapper">
                        <Carousel.Caption className="carousel">
                            <h1 className="carousel-title">{props.movies[i].original_title}</h1>
                            <p className="carousel-description">{props.movies[i].overview.slice(0, 120) + " ..."}</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            );
        }
        return carouselItems
    }

    // TODO: fix the search, for some reason searchVal is reset whenever setSearchedMovies is called
    const resetSearchedMovies = () => {
        if (searchedMovies.length > 0 && searchVal != '') {
            setSearchedMovies([]);
            setSearchVal(''); // reset input search field
        }
    }

    const renderMovieList = () => {
        if (searchedMovies.length > 0) {
            return (<MovieList movies={searchedMovies} />);
        } else if (props.movies.length > 0) {
            return (<MovieList movies={props.movies} />);
        } else {
            return (<p>No movies</p>);
        }
    }

    checkIfDisplayMesssageChanged(displayMessage, setDisplayMessage, 3000);

    return (
        <>
            {displayMessage.display ? <ConfirmationMessage type={displayMessage.type} message={displayMessage.content} /> : null}

            {props.movies.length ?
                <Carousel style={{maxHeight: '400px'}}>
                    {carouselItems(5)}
                </Carousel> : null}
            <div className="container">
                <h1 className="heading-page" style={{paddingTop: '30px'}}>Popular movies 
                    <button onClick={resetSearchedMovies()} className="btn btn-primary ml-3">Reset</button>
                </h1>
                <SearchBar setSearchedMovies={setSearchedMovies} setSearchVal={setSearchVal} setDisplayMessage={setDisplayMessage}/>
                {renderMovieList()}
            </div>
        </>
    )
}
