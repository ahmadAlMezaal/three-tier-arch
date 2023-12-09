import express from 'express';
import { appRoutes } from './src/application/routes/app.routes.js';
import dotenv from 'dotenv';
import './src/data/config/connection.config.js';
import { engine } from 'express-handlebars';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('.hbs', engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');
app.set('views', './src/views/');

app.get('/health', (_req, res) => res.send('Server is up and running!'));
app.use('/', appRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.toUpperCase());
});
