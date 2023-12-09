import { Movie } from '../models/movie.model.js';

class MovieRepository {

    add(name) {
        const movie = new Movie({ name });
        return movie.save();
    }

    findAll() {
        return Movie.find({});
    }

    findOne(id) {
        return Movie.findById(id);
    }

    updateName(id, name) {
        return Movie.findByIdAndUpdate(id, { $set: { name } }, { new: true });
    }

    deleteOne(_id) {
        return Movie.findByIdAndDelete(_id);
    }
}

export const movieRepository = new MovieRepository();
