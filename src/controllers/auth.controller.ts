import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { generarJWT } from '../middlewares/generateJWT';
import User from '../models/User'

export const login = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      msg: 'Email / Password no son correctos'
    })
  }

  const validPassword = bcryptjs.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(400).json({
      msg: 'Email / Password no son correctos.'
    })
  }

  const token = await generarJWT(email);

  res.json({ token });
}