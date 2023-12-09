import { Router } from 'express';

export const authRoutes = Router();

authRoutes.get('/login', (_req, res) => res.render('login'));
