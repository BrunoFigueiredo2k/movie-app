import React from 'react'
import {IMG_BASE_URL} from '../../strings'

export default function TopMoviesTab(props) {
    console.log(props)

    return (
        <div>
            <div className="container">
                <h1 className="heading-page">Top Movies</h1>

                <table className="table-my-list">
                        <thead>
                            <tr>
                                <th className="text-center" style={{width: '10%'}}>Rank</th>
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
                                            <td className="text-center" style={{fontSize: '30px', fontWeight: '700'}}>{index + 1}</td>
                                            <td>
                                                <div className="row">
                                                    <img src={IMG_BASE_URL + movie.poster_path} height={90}
                                                    style={{display: 'inline-block', position: 'relative', paddingLeft: '15px'}}/>
                                                    <div style={{marginLeft: '30px'}}>
                                                        <b style={{fontSize: '20px'}}>{movie.title}</b><br/>
                                                        <span>{movie.release_date}</span><br/>
                                                        <span>{movie.vote_count} votes</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">{movie.vote_average}</td>
                                            <td className="text-center">
                                                
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
