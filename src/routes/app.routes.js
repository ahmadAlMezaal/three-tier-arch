import express from 'express';
import { moviesRoutes } from './movie.routes.js';

export const appRoutes = express.Router();

appRoutes.get('/movies', moviesRoutes);
