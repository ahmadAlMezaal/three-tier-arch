import { movieService } from "../services/movie.service.js";

const fetchAllMovies = (_req, res) => {
    const response = movieService.getAllMovies();
    return res.status(200).json({ movies: response });
};

const addMovie = (req, res) => {
    const { movieName } = req.body;
    try {
        movieService.addMovie(movieName);
        res.status(201).json({ message: `${movieName} movie added successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong! Please try again later' });
    }
};

const deleteMovie = (req, res) => {
    try {
        const response = movieService.deleteMovie(req.params.index)
        if (response) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json({ message: 'Movie deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong! Please try again later' });
    }
}

const editMovie = (req, res) => {
    const { index } = req.params;
    const { movieName } = req.body;
    try {
        const response = movieService.editMovie(index, movieName);
        if (!response) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json({ message: `${movieName} movie updated successfully` });
    } catch (error) {

    }
};

export const movieController = {
    addMovie,
    deleteMovie,
    editMovie,
    fetchAllMovies
};