import { Router } from 'express'

const router = Router();

//Controller imports
import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from '../controllers/users.controller'

//Routes
router.route('/').post(createUser)

router.route('/').get(getUsers)

router.route('/:id').get(getUser)

router.route('/:id').put(updateUser)

router.route('/:id').delete(deleteUser)

export default router;