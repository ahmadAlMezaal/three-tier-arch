import express from 'express';
import { moviesRoutes } from './movie.routes.js';

export const appRoutes = express.Router();

appRoutes.use('/movies', moviesRoutes);
