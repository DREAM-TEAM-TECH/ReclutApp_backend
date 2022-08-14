import { Request, Response } from 'express'
import User from '../models/User'

export async function createUser(req: Request, res: Response) {
    const newUser = await User.create(req.body); 
    return res.json({
        message: 'User created successfully'
    });
}

export async function getUsers(req: Request, res: Response) {
    return res.json({
        message: 'Get users successfully'
    });
}

export async function getUser(req: Request, res: Response) {
    return res.json({
        message: 'Get user successfully'
    });
}

export async function updateUser(req: Request, res: Response) { 
    return res.json({
        message: 'User updated successfully'
    });
}

export async function deleteUser(req: Request, res: Response) { 
    return res.json({
        message: 'User deleted successfully'
    });
}