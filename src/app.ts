import express from 'express'
import {Router} from 'express'
import morgan from 'morgan'
import candidatesRoutes from './routes/candidates'
import companiesRoutes from './routes/companies'
import pointsRoutes from './routes/points'
import rolesRoutes from './routes/roles'
import routesRoutes from './routes/routes'
import transportationsRoutes from './routes/transportations'
import usersRoutes from './routes/users'
import vacantsRoutes from './routes/vacants'

const jwt = require('jsonwebtoken');
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Authentication middleware
const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null)
        return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);
        }

        req.user = user;

        next();
    })
}

//Routes
app.use('/api/candidates', candidatesRoutes);
app.use('/api/companies', companiesRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/routes', routesRoutes);
app.use('/api/transportations', transportationsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/vacants', vacantsRoutes);

export default app;