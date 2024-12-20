// fetch movies from an api
const fetchMovies = async () => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'aa35598648msh5520d2a7ce3ea6dp129702jsnb3e6d202af0e',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // Get the container element
        const moviesContainer = document.getElementById('movies');

        // Loop through the movies and create a list item for each one
        result.forEach((movie) => {
            const movieListItem = document.createElement('li');
            movieListItem.textContent = `${movie.title} (${movie.year}) (${movie.rating})`;
            moviesContainer.appendChild(movieListItem);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchMovies();
