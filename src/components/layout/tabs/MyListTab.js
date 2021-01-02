import React, { useEffect, useState } from 'react';
import { IMG_BASE_URL, LOCAL_STORAGE_KEY } from '../../strings'

export default function MyListTab() {
    const [myMovies, setMyMovies] = useState([])

    useEffect(() =>{
        const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedMovies){
            setMyMovies(storedMovies)
        } else {
            console.log('ERROR: no movies in local storage')
        }
    }, [])

    console.log(myMovies)

    return (
        <div className="container">
            <h1 className="heading-page">My List</h1>
            {/** TODO: fix display of my movies here */}
            <table className="table-my-list">
                <thead>
                <tr>
                    <th style={{width: '20px', textAlign: 'center'}}>#</th>
                    <th style={{width: '70px', textAlign: 'center'}}>Image</th>
                    <th>Title</th>
                    <th style={{width: '170px'}}>Average Rating</th>
                </tr>
                </thead>
                {myMovies.map((movie, index) => {
                    return(
                        <tbody>
                        <tr>
                            <td style={{color: '#ffd1df', textAlign: 'center', fontWeight: 'bold'}}>{index + 1}</td>
                            <td><img src={IMG_BASE_URL + movie.movie.movieItem.poster_path} width={70} /></td>
                            <td style={{fontWeight: 'bold', fontSize: '22px', letterSpacing: '1px'}}>{movie.movie.movieItem.original_title}</td>
                            <td style={{fontWeight: 'bold', fontSize: '22px'}}>{movie.movie.movieItem.vote_average}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}
