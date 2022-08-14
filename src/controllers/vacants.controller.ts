import { Request, Response } from 'express'
import Vacant from '../models/Vacant'

export async function createVacant(req: Request, res: Response) {
    return res.json({
        message: 'Vacant created successfully'
    });
}

export async function getVacants(req: Request, res: Response) {
    return res.json({
        message: 'Get vacants successfully'
    });
}

export async function getVacant(req: Request, res: Response) {
    return res.json({
        message: 'Get vacant successfully'
    });
}

export async function updateVacant(req: Request, res: Response) { 
    return res.json({
        message: 'Vacant updated successfully'
    });
}

export async function deleteVacant(req: Request, res: Response) { 
    return res.json({
        message: 'Vacant deleted successfully'
    });
}