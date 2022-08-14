import { Router } from 'express'
import multer from 'multer'

const router = Router();

//Controller imports
import {
    createCompany,
    getCompanies,
    getCompany,
    updateCompany,
    deleteCompany,
    addRecord
} from '../controllers/companies.controller'

//Routes
router.route('/').post(createCompany)

router.route('/urecord/:id').post(multer().single('record'), addRecord)

router.route('/').get(getCompanies)

router.route('/:id').get(getCompany)

router.route('/:id').put(updateCompany)

router.route('/:id').delete(deleteCompany)

export default router;