class MyMovies {
    getMoviesLocalStorage (moviesProps){
        let ids = []
        let movies = []

        // Loop through all movies and add ids to list
        moviesProps.map(movie => {
            ids.push(movie.id)
        })

        // Loop through all ids and getItems from localstorage based on id, if this doesn't return null then add movie to list
        ids.map(id => {
            let storedMovie = JSON.parse(localStorage.getItem(id.toString()))
            if (storedMovie != null) movies.push(storedMovie[0])
        })

        return movies
    }
}

export default new MyMovies();