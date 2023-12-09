import express from 'express';
import { appRoutes } from './src/routes/app.routes.js';

const app = express();

app.get('/', (_req, res) => res.send('Hello World!'));

app.use('/api', appRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
