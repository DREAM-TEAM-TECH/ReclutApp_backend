import { Router } from 'express'

const router = Router();

//Controller imports
import {
    createVacant,
    getVacants,
    getVacant,
    updateVacant,
    deleteVacant
} from '../controllers/vacants.controller'

//Routes
router.route('/').post(createVacant)

router.route('/').get(getVacants)

router.route('/:id').get(getVacant)

router.route('/:id').put(updateVacant)

router.route('/:id').post(deleteVacant)

export default router;