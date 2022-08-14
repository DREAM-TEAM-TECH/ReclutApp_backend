import { Request, Response } from 'express'
import Role from '../models/Role'

export async function createRole(req: Request, res: Response) { 
    return res.json({
        message: 'Role created successfully'
    });
}

export async function getRoles(req: Request, res: Response) { 
    return res.json({
        message: 'Get roles successfully'
    });
}

export async function getRole(req: Request, res: Response) { 
    return res.json({
        message: 'Get role successfully'
    });
}

export async function updateRole(req: Request, res: Response) { 
    return res.json({
        message: 'Role updated successfully'
    });
}

export async function deleteRole(req: Request, res: Response) { 
    return res.json({
        message: 'Role deleted successfully'
    });
}