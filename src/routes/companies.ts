import { Router } from 'express'

const router = Router();

//Controller imports
import {
    createCompany,
    getCompanies,
    getCompany,
    updateCompany,
    deleteCompany
} from '../controllers/companies.controller'

//Routes
router.route('/').post(createCompany)

router.route('/').get(getCompanies)

router.route('/:id').get(getCompany)

router.route('/:id').put(updateCompany)

router.route('/:id').post(deleteCompany)

export default router;