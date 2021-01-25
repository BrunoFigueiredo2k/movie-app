class MyMoviesService {

    getMyMovies(movies){
        let ids = [];
        let moviesArray = [];

        // Loop through all movies and add ids to list
        movies.map(movie => {
            ids.push(movie.id)
        })

        // Loop through all ids and getItems from localstorage based on id, if this doesn't return null then add movie to list
        ids.map(id => {
            let storedMovie = JSON.parse(localStorage.getItem(id.toString()))
            if (storedMovie != null) moviesArray.push(storedMovie[0])
        })

        return movies
    }
    
}

export default new MyMoviesService();