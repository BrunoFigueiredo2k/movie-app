import React, { useState, useEffect } from 'react';
import '../../css/App.css'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MovieList from '../MovieList';
import axios from 'axios'
import app from '../../firebase'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_MOVIEDB}&language=en-US&page=1`;

export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
        .then(res => {
            console.log(res.data.results)
            setMovies(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const PopularTab = (
        <div className="container">
            <h1>Popular movies <button onClick={() => app.auth().signOut()} style={{float: 'right'}}>Sign out</button></h1>
            {movies ?
            <MovieList movies={movies}></MovieList>
                : <p>No movies</p>}
        </div>
    )

    const MyListTab = (
        <div className="container">
            <h1>My List <button onClick={() => app.auth().signOut()} style={{float: 'right'}}>Sign out</button></h1>
        </div>
    )

    return (
        <div>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="container">
            <Tab label="Popular" {...a11yProps(0)} />
            <Tab label="My List" {...a11yProps(1)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            {PopularTab}
        </TabPanel>
        <TabPanel value={value} index={1}>
            {MyListTab}
        </TabPanel>
        </div>
    );
}