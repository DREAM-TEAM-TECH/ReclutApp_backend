import { Request, Response } from 'express';
import User from '../models/User'

export const login = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(400).json({
      msg: 'Email / Password no son correctos'
    })
  }

  res.json({ email, password });
}