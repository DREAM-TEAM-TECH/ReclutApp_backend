import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import User from '../models/User'
import { generarJWT } from '../middlewares/generateJWT';

export async function createUser(req: Request, res: Response) {

    const { password, email } = req.body;

    const salt = bcryptjs.genSaltSync();
    const passwordCrypt = bcryptjs.hashSync(password, salt);

    req.body.password = passwordCrypt;

    const token = await generarJWT(email);

    const newUser = await User.create(req.body);
    return res.json({
        message: 'User created successfully',
        token
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