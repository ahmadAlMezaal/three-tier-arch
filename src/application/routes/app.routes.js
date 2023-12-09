import express from 'express';
import { moviesRoutes } from './movie.routes.js';
import { authRoutes } from './auth.routes.js';

export const appRoutes = express.Router();

appRoutes.use('/auth', authRoutes);
appRoutes.use('/api/movies', moviesRoutes);
