import axios from 'axios';

const API_GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_MOVIEDB}&language=en-US`
const API_POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_MOVIEDB}&language=en-US&page=1`

class MovieService {

    getGenres(){
        return axios.get(API_GENRES_URL);
    }

    getPopularMovies(){
        return axios.get(API_POPULAR_MOVIES_URL);
    }
    
}

export default new MovieService();
