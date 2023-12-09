import { movieService } from "../services/movie.service.js";

const fetchAllMovies = async (_req, res) => {
    const response = await movieService.getAllMovies();
    return res.status(200).json({ movies: response });
};

const fetchMovie = async (req, res) => {
    try {
        const response = await movieService.getMovie(req.params.name);
        if (!response) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json({ movies: response });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const addMovie = async (req, res) => {
    const { name } = req.body;
    try {
        await movieService.addMovie(name);
        res.status(201).json({ message: `${name} movie added successfully` });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const response = await movieService.deleteMovie(req.params.id)
        if (!response) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json({ message: 'Movie deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const editMovie = async (req, res) => {
    const { id } = req.params;
    const { movieName } = req.body;
    try {
        const response = await movieService.editMovie(id, movieName);
        if (!response) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json({ message: `${movieName} movie updated successfully` });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const movieController = {
    fetchAllMovies,
    deleteMovie,
    fetchMovie,
    editMovie,
    addMovie,
};