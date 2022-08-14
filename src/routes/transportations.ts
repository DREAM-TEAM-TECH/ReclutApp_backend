import { Router } from 'express'
import multer from 'multer'

const router = Router();

//Controller imports
import {
    createTransportation,
    getTransportations,
    getTransportation,
    updateTransportation,
    deleteTransportation,
    addPhoto
} from '../controllers/transportations.controller'

//Routes
router.route('/').post(multer().single('photo'), createTransportation)

router.route('/uphoto/:id').post(multer().single('photo'), addPhoto)

router.route('/').get(getTransportations)

router.route('/:id').get(getTransportation)

router.route('/:id').put(updateTransportation)

router.route('/:id').delete(deleteTransportation)

export default router;