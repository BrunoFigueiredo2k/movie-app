import React, { useEffect, useState } from 'react';
import { IMG_BASE_URL, LOCAL_STORAGE_KEY, watchStatus, COLORS_BORDER_LEFT_STATUS } from '../../strings'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default function MyListTab() {
    const [myMovies, setMyMovies] = useState([])
    const [key, setKey] = useState('All');

    useEffect(() =>{
        const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        console.log(storedMovies)
        if (storedMovies) setMyMovies(storedMovies)
    }, [])

    const determineColorStatus = (statusWatching) => {
        for (let i = 0; i < watchStatus.length; i++){
            switch (statusWatching){
                case watchStatus[i]:
                    return COLORS_BORDER_LEFT_STATUS[i].slice(COLORS_BORDER_LEFT_STATUS[i].length - 7)
            }
        }
    }

    const showRatingNumber = (rating) => {
        // Check if the third character in the string is a 0, because if it is then the rating is 10
        // else it will be the ')' bracket for which we have to return the second character in the string
        if (rating.charAt(2) == "0"){
            return rating.charAt(1) + rating.charAt(2)
        } else {
            return rating.charAt(1)
        }
    }

    return (
        <div className="container">
            <h1 className="heading-page">My List</h1>
            {myMovies.length ? // If length of movies array is not 0 then return table of movies
            <>
                <Tabs
                defaultActiveKey="All"
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                    <Tab eventKey="All" title="All Movies" />
                    {watchStatus.map(status => {
                        return <Tab eventKey={status} title={status} />
                    })}
                </Tabs>
                <table className="table-my-list">
                    <thead>
                    <tr>
                        <th style={{width: '5px'}}></th>
                        <th style={{width: '20px', textAlign: 'center'}}>#</th>
                        <th style={{width: '70px', textAlign: 'center'}}>Image</th>
                        <th>Title</th>
                        <th style={{width: '120px'}}>Date added</th>
                        <th style={{width: '100px',  textAlign: 'center'}}>Score</th>
                    </tr>
                    </thead>
                    {myMovies.map((movie, index) => {
                        // If movie status is equal to current key that is set by tab, then display. Also display everything for key 'All movies'
                        if (movie.userStats.status == key || key == "All"){
                            return (
                                <tbody>
                                <tr>
                                    <td style={{backgroundColor: determineColorStatus(movie.userStats.status)}}></td>
                                    <td style={{color: '#ffd1df', textAlign: 'center', fontWeight: 'bold'}}>{index + 1}</td>
                                    <td><img src={IMG_BASE_URL + movie.movie.movieItem.poster_path} width={70} /></td>
                                    <td style={{fontWeight: 'bold', fontSize: '22px', letterSpacing: '1px'}}>{movie.movie.movieItem.original_title}</td>
                                    <td style={{fontSize: '16px'}}>{movie.date}</td>
                                    <td style={{fontWeight: 'bold', fontSize: '22px', textAlign: 'center'}}>
                                        {showRatingNumber(movie.userStats.rating)}
                                    </td>
                                </tr>
                                </tbody>
                            )
                        }
                    })}
                </table>
                </>
            : <>
            <p style={{color: 'white'}}>No movies in your list yet...</p><br/>
            <img src="https://i.imgur.com/sUpua6W.gif"/>
            </>}
        </div>
    )
}
