import { Request, Response } from 'express'
import Point from '../models/Point'

export async function createPoint(req: Request, res: Response) {
    const newPoint = await Point.create(req.body);
    return res.json({ id: newPoint._id });
}

export async function getPoints(req: Request, res: Response) {
    const points = await Point.find();
    return res.json(points);
}

export async function getPoint(req: Request, res: Response) {
    const point = await Point.findOne({
        "points._id": req.params.id
    });

    const pointID = point?.points.find((point) => {
        return (point._id.toString() === req.params.id) ? point : ''
    })

    return res.json({ point: pointID });
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