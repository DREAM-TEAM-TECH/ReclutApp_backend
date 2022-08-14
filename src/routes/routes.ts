import { Router } from 'express'

const router = Router();

//Controller imports
import {
    createRoute,
    getRoutes,
    getRoute,
    updateRoute,
    deleteRoute
} from '../controllers/routes.controller'

//Routes
router.route('/').post(createRoute)

router.route('/').get(getRoutes)

router.route('/:id').get(getRoute)

router.route('/:id').put(updateRoute)

router.route('/:id').post(deleteRoute)

export default router;