import { Request, Response } from 'express'
import Point from '../models/Point'

export async function createPoint(req: Request, res: Response) { 
    const newPoint = await Point.create(req.body); 
    return res.json({
        message: 'Point created successfully'
    });
}

export async function getPoints(req: Request, res: Response) { 
    const points = await Point.find();
    return res.json(points);
}

export async function getPoint(req: Request, res: Response) { 
    const point = await Point.findById(req.params.id);
    return res.json(point);
}

export async function updatePoint(req: Request, res: Response) { 
    let point = await Point.findOneAndUpdate(req.params, req.body);
    return res.json({
        message: 'Point updated successfully'
    });
}

export async function deletePoint(req: Request, res: Response) { 
    const point = await Point.findOneAndDelete(req.params);
    return res.json({
        message: 'Point deleted successfully'
    });
}