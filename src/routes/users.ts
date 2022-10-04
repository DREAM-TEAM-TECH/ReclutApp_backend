import { Router } from 'express'
import authenticateToken from '../middlewares/authenticateJwt';

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

router.route('/:id').put(authenticateToken, updateUser)

router.route('/:id').delete(authenticateToken, deleteUser)

export default router;