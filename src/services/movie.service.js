let movies = [];

const getAllMovies = () => {
    return movies;
};

const addMovie = (movieName) => {
    return movies.push(movieName);
};

const deleteMovie = (index) => {
    if (index >= 0 && index < movies.length) {
        movies.splice(index, 1);
        return true;
    } else {
        return false;
    }
};

const editMovie = (index, movieName) => {
    if (index >= 0 && index < movies.length) {
        movies[index] = movieName;
        res.json({ message: `${movieName} movie updated successfully` });
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
};

export const movieService = {
    getAllMovies,
    deleteMovie,
    editMovie,
    addMovie,
};
