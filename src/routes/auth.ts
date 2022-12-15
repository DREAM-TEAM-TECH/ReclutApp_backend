import { Router } from 'express';
import { check } from 'express-validator';
import { login, validateTokenUser } from '../controllers/auth.controller';
import { validarCampos } from '../middlewares/validarCampos';
import authenticateToken from '../middlewares/authenticateJwt';

const router = Router();

router.post('/login', [
  check('email', 'El correo es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  validarCampos
], login);

router.get('/', [
  authenticateToken
], validateTokenUser)

export default router;
