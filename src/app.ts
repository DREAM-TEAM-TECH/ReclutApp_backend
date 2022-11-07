import express from 'express'
import morgan from 'morgan'
import candidatesRoutes from './routes/candidates'
import companiesRoutes from './routes/companies'
import pointsRoutes from './routes/points'
import rolesRoutes from './routes/roles'
import routesRoutes from './routes/routes'
import transportationsRoutes from './routes/transportations'
import usersRoutes from './routes/users'
import vacantsRoutes from './routes/vacants'
import authRoutes from './routes/auth'
import authenticateToken from './middlewares/authenticateJwt'

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Main
app.get('/', async (req, res) => {
    res.json({ message: "Backend API REST for ReclutApp" });
})

//Routes
app.use('/api/candidates', authenticateToken, candidatesRoutes);
app.use('/api/companies', authenticateToken, companiesRoutes);
app.use('/api/points', authenticateToken, pointsRoutes);
app.use('/api/roles', authenticateToken, rolesRoutes);
app.use('/api/routes', authenticateToken, routesRoutes);
app.use('/api/transportations', authenticateToken, transportationsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/vacants', authenticateToken, vacantsRoutes);
app.use('/api/auth', authRoutes);

export default app;