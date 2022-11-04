import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.json({ email, password });
}