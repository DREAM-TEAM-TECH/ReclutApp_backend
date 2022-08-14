import { Router } from 'express'

const router = Router();

//Controller imports
import {
    createPoint,
    getPoints,
    getPoint,
    updatePoint,
    deletePoint
} from '../controllers/points.controller'

//Routes
router.route('/').post(createPoint)

router.route('/').get(getPoints)

router.route('/:id').get(getPoint)

router.route('/:id').put(updatePoint)

router.route('/:id').post(deletePoint)

export default router;