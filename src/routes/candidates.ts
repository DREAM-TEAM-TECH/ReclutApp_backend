import { Router } from 'express'

const router = Router();

//Controller imports
import {
    createCandidate,
    getCandidates,
    getCandidate,
    updateCandidate,
    deleteCandidate
} from '../controllers/candidates.controller'

//Routes
router.route('/').post(createCandidate)

router.route('/').get(getCandidates)

router.route('/:id').get(getCandidate)

router.route('/:id').put(updateCandidate)

router.route('/:id').post(deleteCandidate)

export default router;