import React, {useEffect, useState} from 'react'
import {IMG_BASE_URL} from '../../strings'
import MyMovies from '../../../utils/MyMovies'

export default function TopMoviesTab(props) {
    const [myMovies, setMyMovies] = useState([])

    useEffect(() => {
        setMyMovies(MyMovies.getMoviesLocalStorage(props.movies));
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

    return (
        <div>
            <div className="container">
                <h1 className="heading-page">Top Movies</h1>

                <table className="table-my-list">
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
                                props.movies.map((movie, index) => {
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
                                                    } else {
                                                        return '-'
                                                    };
                                                })}
                                            </td>
                                            <td className="text-center">
                                                {myMovies.map(myMovie => {
                                                    if (myMovie.movie.movieItem.id === movie.id) {
                                                        return (myMovie.userStats.status);
                                                    } else {
                                                        return '-'
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
