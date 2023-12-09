import express from 'express';
import { movieController } from '../controllers/movie.controller.js';

export const moviesRoutes = express.Router();

moviesRoutes.get('/', movieController.fetchAllMovies);
moviesRoutes.post('/', movieController.addMovie);
moviesRoutes.delete('/:index', movieController.deleteMovie);
moviesRoutes.put('/:index', movieController.editMovie);
