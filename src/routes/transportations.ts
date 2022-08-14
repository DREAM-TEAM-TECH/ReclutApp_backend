import { Router } from 'express'

const router = Router();

//Controller imports
import {
    createTransportation,
    getTransportations,
    getTransportation,
    updateTransportation,
    deleteTransportation
} from '../controllers/transportations.controller'

//Routes
router.route('/').post(createTransportation)

router.route('/').get(getTransportations)

router.route('/:id').get(getTransportation)

router.route('/:id').put(updateTransportation)

router.route('/:id').post(deleteTransportation)

export default router;