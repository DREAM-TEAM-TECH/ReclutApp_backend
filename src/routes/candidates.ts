import { Router } from 'express'
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validarCampos';

const router = Router();

//Controller imports
import {
    createCandidate,
    getCandidates,
    getCandidate,
    updateCandidate,
    deleteCandidate,
    getCandidatesByPoint,
    deleteAllCandidates
} from '../controllers/candidates.controller'

//Routes
router.route('/').post(createCandidate)

router.route('/').get(getCandidates)

router.get('/point/:id', [
    check('id', 'Is not a valid Mongo ID').isMongoId(),
    validarCampos
], getCandidatesByPoint);

router.route('/:id').get(getCandidate)

router.route('/:id').put(updateCandidate)

router.route('/:id').delete(deleteCandidate)

router.route('/delete').post(deleteAllCandidates)

export default router;