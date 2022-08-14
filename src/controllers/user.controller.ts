import { Request, Response } from 'express'
import User from '../models/User'

export async function createUser(req: Request, res: Response) {
    const newUser = await User.create(req.body); 
    return res.json({
        message: 'User created successfully'
    });
}