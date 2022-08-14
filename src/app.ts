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

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/candidates', candidatesRoutes);
app.use('/api/companies', companiesRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/routes', routesRoutes);
app.use('/api/transportation', transportationsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/vacants', vacantsRoutes);

export default app;