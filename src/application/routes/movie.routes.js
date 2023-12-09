import express from 'express';
import { movieController } from '../controllers/movie.controller.js';

export const moviesRoutes = express.Router();

moviesRoutes.get('/', movieController.fetchAllMovies);
moviesRoutes.get('/find/:name', movieController.fetchMovie);
moviesRoutes.post('/', movieController.addMovie);
moviesRoutes.delete('/:id', movieController.deleteMovie);
moviesRoutes.put('/:id', movieController.editMovie);
