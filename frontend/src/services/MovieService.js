import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY_MOVIEDB;
const BASE_URL = "https://api.themoviedb.org/3/";

class MovieService {

    getGenres(){
        return axios.get(BASE_URL + `genre/movie/list?api_key=${API_KEY}&language=en-US`);
    }

    getPopularMovies(){
        return axios.get(BASE_URL + `movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    }

    getSimilarMovies(movieId){
        return axios.get(BASE_URL + `movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`);
    }

    searchMoviesByTitle(movieTitle){
        return axios.get(
            BASE_URL + `search/movie?language=en-US&page=1&include_adult=false`, // url
            { params: { api_key: API_KEY, query: movieTitle } } // options query params
        );
    }
    
}

export default new MovieService();
