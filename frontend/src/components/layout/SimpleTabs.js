import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PopularTab from './tabs/PopularTab'
import MyListTab from './tabs/MyListTab'
import TopMoviesTab from './tabs/TopMoviesTab'
import app from '../../firebase'
import {useHistory} from "react-router-dom";
import MovieService from '../../services/MovieService';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

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

export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);
    const [movies, setMovies] = useState([]);
    let history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        MovieService.getPopularMovies().then(res => {
            setMovies(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })  
    }, []);

    const signOut = () => {
        app.auth().signOut();
        history.push("/login");
    }

    return (
        <>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="container">
                    <Tab label="Popular" {...a11yProps(0)} />
                    <Tab label="My List" {...a11yProps(1)} />
                    <Tab label="Top Movies" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <PopularTab movies={movies}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MyListTab movies={movies}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TopMoviesTab movies={movies}/>
            </TabPanel>
            <button onClick={signOut} style={{float: 'right'}}>Sign out</button>
        </>
    );
}