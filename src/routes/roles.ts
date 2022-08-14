import { Router } from 'express'

const router = Router();

//Controller imports
import {
    createRole,
    getRoles,
    getRole,
    updateRole,
    deleteRole
} from '../controllers/roles.controller'

//Routes
router.route('/').post(createRole)

router.route('/').get(getRoles)

router.route('/:id').get(getRole)

router.route('/:id').put(updateRole)

router.route('/:id').post(deleteRole)

export default router;