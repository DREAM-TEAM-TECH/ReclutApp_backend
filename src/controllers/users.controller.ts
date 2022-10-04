import { Request, Response } from 'express'
import User from '../models/User'
const jwt = require('jsonwebtoken')

export async function createUser(req: Request, res: Response) {
    const generateAccessToken = (email: any) => {
        return jwt.sign(email, process.env.TOKEN_SECRET);
    }

    console.log(req.body.email);
    const token = generateAccessToken(req.body.email);
    const newUser = await User.create(req.body); 
    return res.json({
        message: 'User created successfully',
        token : token
    });
}

export async function getUsers(req: Request, res: Response) {
    const users = await User.find().populate('role', 'transportation', 'companies');
    return res.json(users);
}

export async function getUser(req: Request, res: Response) {
    const user = await User.findById(req.params.id).populate('role', 'transportation', 'companies');
    return res.json(user);
}

export async function updateUser(req: Request, res: Response) { 
    let user = await User.findOneAndUpdate(req.params, req.body);
    return res.json({
        message: 'User updated successfully'
    });
}

export async function deleteUser(req: Request, res: Response) { 
    const user = await User.findOneAndDelete(req.params);
    return res.json({
        message: 'User deleted successfully'
    });
}