import { Request, Response } from 'express'
import Transportation from '../models/Transportation'

export async function createTransportation(req: Request, res: Response) { 
    return res.json({
        message: 'Transportation created successfully'
    });
}

export async function getTransportations(req: Request, res: Response) { 
    return res.json({
        message: 'Get transportations successfully'
    });
}

export async function getTransportation(req: Request, res: Response) { 
    return res.json({
        message: 'Get transportation successfully'
    });
}

export async function updateTransportation(req: Request, res: Response) { 
    return res.json({
        message: 'Transportation updated successfully'
    });
}

export async function deleteTransportation(req: Request, res: Response) { 
    return res.json({
        message: 'Transportation deleted successfully'
    });
}