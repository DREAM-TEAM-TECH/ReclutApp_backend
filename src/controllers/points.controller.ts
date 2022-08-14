import { Request, Response } from 'express'
import Point from '../models/Point'

export async function createPoint(req: Request, res: Response) { 
    return res.json({
        message: 'Point created successfully'
    });
}

export async function getPoints(req: Request, res: Response) { 
    return res.json({
        message: 'Get points successfully'
    });
}

export async function getPoint(req: Request, res: Response) { 
    return res.json({
        message: 'Get point successfully'
    });
}

export async function updatePoint(req: Request, res: Response) { 
    return res.json({
        message: 'Point updated successfully'
    });
}

export async function deletePoint(req: Request, res: Response) { 
    return res.json({
        message: 'Point deleted successfully'
    });
}