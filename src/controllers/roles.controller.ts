import { Request, Response } from 'express'
import Role from '../models/Role'

export async function createRole(req: Request, res: Response) { 
    const newRole = await Role.create(req.body); 
    return res.json({
        message: 'Role created successfully'
    });
}

export async function getRoles(req: Request, res: Response) { 
    const roles = await Role.find(); 
    return res.json(roles);
}

export async function getRole(req: Request, res: Response) { 
    const role = await Role.findById(req.params.id);
    return res.json(role);
}

export async function updateRole(req: Request, res: Response) { 
    let role = await Role.findOneAndUpdate(req.params, req.body);
    return res.json({
        message: 'Role updated successfully'
    });
}

export async function deleteRole(req: Request, res: Response) { 
    const role = await Role.findOneAndDelete(req.params);
    return res.json({
        message: 'Role deleted successfully'
    });
}