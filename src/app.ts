import express, { application, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes/routes';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
routes(app);
app.use((req: Request, res: Response, next: any) => {
    return res.status(404).json({
        status: 404,
        error: 'Resource not found'
    })
})

export default app;