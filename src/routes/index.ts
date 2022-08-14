import {Router} from 'express'

const router = Router();

//Controller imports
import { createUser } from '../controllers/user.controller'

//Make routes
router.route('/users').post(createUser)

export default router;