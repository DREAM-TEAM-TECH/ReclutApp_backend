import { Request, Response } from 'express'
import Vacant from '../models/Vacant'

export async function createVacant(req: Request, res: Response) {
    const newVacant = await Vacant.create(req.body);
    return res.json(newVacant);
}

export async function getVacants(req: Request, res: Response) {
    const vacants = await Vacant.find();
    return res.json(vacants);
}

export async function getVacant(req: Request, res: Response) {
    const vacant = await Vacant.findById(req.params.id);
    return res.json(vacant);
}

export async function updateVacant(req: Request, res: Response) {
    let vacant = await Vacant.findOneAndUpdate(req.params, req.body);
    return res.json({
        message: 'Vacant updated successfully'
    });
}

export async function deleteVacant(req: Request, res: Response) {
    const vacant = await Vacant.findOneAndDelete(req.params);
    return res.json({
        message: 'Vacant deleted successfully'
    });
}