import { Request, Response } from 'express'
import Route from '../models/Route'

export async function createRoute(req: Request, res: Response) {
    const newRoute = await Route.create(req.body);
    const route = await Route.findById(newRoute)
        .populate('transportation')
        .populate('points')
    return res.json(route);
}

export async function getRoutes(req: Request, res: Response) {
    const routes = await Route.find()
        .populate('transportation')
        .populate('points')
    return res.json(routes);
}

export async function getRoute(req: Request, res: Response) {
    const route = await Route.findById(req.params.id)
        .populate('transportation')
        .populate('points')
    return res.json(route);
}

export async function updateRoute(req: Request, res: Response) {
    let route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .populate('transportation')
        .populate('points')
    return res.json(route);
}

export async function deleteRoute(req: Request, res: Response) {
    const route = await Route.findOneAndDelete(req.params);
    return res.json({
        message: 'Route deleted successfully'
    });
}