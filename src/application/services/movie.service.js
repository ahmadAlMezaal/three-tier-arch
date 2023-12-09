import { movieRepository } from "../../data/repositories/movie.repository.js";

const getAllMovies = () => {
    return movieRepository.findAll();
};

const getMovie = (id) => {
    return movieRepository.findOne(id);
};

const addMovie = (movieName) => {
    return movieRepository.add(movieName);
};

const deleteMovie = (_id) => {
    return movieRepository.deleteOne(_id)
};

const editMovie = async (id, movieName) => {
    const movie = await getMovie(id);
    if (!movie) {
        return null;
    }
    return await movieRepository.updateName(id, movieName);
};

export const movieService = {
    getAllMovies,
    deleteMovie,
    editMovie,
    addMovie,
    getMovie,
};
