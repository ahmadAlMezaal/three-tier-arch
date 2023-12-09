import express from 'express';
import { appRoutes } from './src/application/routes/app.routes.js';
import dotenv from 'dotenv';
import './src/data/config/connection.config.js';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_req, res) => res.send('Hello World!'));
app.use('/api', appRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.toUpperCase());
});
