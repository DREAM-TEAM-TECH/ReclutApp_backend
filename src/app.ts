import express from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index'

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api', indexRoutes);

export default app;