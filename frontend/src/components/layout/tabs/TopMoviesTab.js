import React, {useEffect, useState} from 'react'
import {IMG_BASE_URL} from '../../strings'
import MyMovies from '../../../utils/MyMovies'
import ConfirmationMessage from '../ConfirmationMessage';

export default function TopMoviesTab(props) {
    const [myMovies, setMyMovies] = useState([]);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [typeDisplayMessage, setTypeDisplayMessage] = useState('');
    const [contentDisplayMessage, setContentDisplayMessage] = useState('');
    const movies = props.movies;

    useEffect(() => {
        if (myMovies.length == 0) setMyMovies(MyMovies.getMoviesLocalStorage(movies));
    }, [myMovies])

    const determineColorRank = (index) => {
        const style = {
            fontSize: '30px', 
            fontWeight: '700',
            backgroundColor: 'transparent',
            borderRadius: '10px',
            padding: '20px 30px'
        }

        switch (index){
            case 1: // gold
                style.backgroundColor = '#CFB53B';
                return style;
            case 2: // silver
                style.backgroundColor = '#B4B4B4';
                return style;
            case 3: // bronze
                style.backgroundColor = '#8C7853';
                return style;  
            default:
                return style;
        }
    }

    const onChangeDropdownValue = (e) => {
        let val = e.target.value
        switch (val){
            case 'h-score':
                applyFilter('t-score');
                break;
            case 'l-score':
                applyFilter('b-score');
                break;
            case 'h-votes':
                applyFilter('t-votes')
                break;
            case 'l-votes':
                applyFilter('b-votes');
                break;
            case 'newest':
                applyFilter('t-date');
                break;
            case 'oldest':
                applyFilter('b-date');
                break;
        }
    }

    const applyFilter = (type) => {
        try {
            movies.sort((a,b) => {
                if (type.includes('score')){
                    if (type.includes('t')){
                        // filter by descending order
                        return b.vote_average - a.vote_average;
                    } else {
                        // filter by ascending order 
                        return a.vote_average - b.vote_average;
                    }
                } else if (type.includes('votes')){
                    if (type.includes('b')){
                        // filter by descending order
                        return a.vote_count - b.vote_count;
                    } else {
                        // filter by ascending order 
                        return b.vote_count - a.vote_count;
                    }
                } else if (type.includes('date')){
                    if (type.includes('b')){
                         // filter by descending order
                         return new Date(a.release_date) - new Date(b.release_date);
                    } else {
                        // filter by ascending order 
                        return new Date(b.release_date) - new Date(a.release_date);
                    }
                }
            })
            showMessage('success', 'Successfully filtered!');
        } catch (e){
            showMessage('failure', e);
        }
    }

    const showMessage = (type, content) => {
        setTypeDisplayMessage(type);
        setContentDisplayMessage(content);
        setDisplayMessage(true);
    }

    // Checks if state message confirmation is being displayed and sets display to false after 3 seconds
    const checkIfDisplayMesssageChanged = () => {
        if (displayMessage){
            const timer = setTimeout(() => {
                setDisplayMessage(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }
    
    checkIfDisplayMesssageChanged();

    return (
        <div>
            <div className="container">
                {displayMessage ? <ConfirmationMessage type={typeDisplayMessage} message={contentDisplayMessage} /> : null}
                <h1 className="heading-page">Top Movies</h1>

                <label for="filter" style={{color: 'white'}}>Filter by:</label><br/>
                <select name="filter" id="filter" className="select" onChange={onChangeDropdownValue}>
                    <option disabled>Select option</option>
                    <option value="h-score">Highest score</option>
                    <option value="l-score">Lowest score</option>
                    <option value="m-votes">Most votes</option>
                    <option value="l-votes">Least votes</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>

                <table className="table-my-list mt-4 pb-4">
                        <thead>
                            <tr>
                                <th className="text-center" style={{width: '10%'}}>Rank</th>
                                <th></th>
                                <th className="text-center" style={{width: '60%'}}>Title</th>
                                <th className="text-center" style={{width: '10%'}}>Score</th>
                                <th className="text-center" style={{width: '10%'}}>Your Score</th>
                                <th className="text-center" style={{width: '10%'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map((movie, index) => {
                                    return (
                                        <tr key={movie.id}>
                                            <td className="text-center"><span style={determineColorRank(index + 1)}>{index + 1}</span></td>
                                            <td><img src={IMG_BASE_URL + movie.poster_path} height={90}
                                                    style={{paddingLeft: '10px'}}/></td>
                                            <td>
                                                <div className="row">
                                                    <div style={{marginLeft: '30px'}}>
                                                        <b style={{fontSize: '20px'}}>{movie.title}</b><br/>
                                                        <span>{movie.release_date}</span><br/>
                                                        <span>{movie.vote_count} votes</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">{movie.vote_average}</td>
                                            <td className="text-center">
                                                {myMovies.map(myMovie => {
                                                    if (myMovie.movie.movieItem.id === movie.id) {
                                                        return (myMovie.userStats.rating.charAt(1))
                                                    }
                                                })}
                                            </td>
                                            <td className="text-center">
                                                {myMovies.map(myMovie => {
                                                    if (myMovie.movie.movieItem.id === movie.id) {
                                                        return (myMovie.userStats.status);
                                                    }
                                                })}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    )
}
