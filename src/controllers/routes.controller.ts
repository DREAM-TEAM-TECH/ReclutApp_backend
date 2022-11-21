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

    const prevRoute = await Route.findById(req.params.id)

    if (!prevRoute) {
        return res.status(400).json({
            msg: "No existe una ruta con el id " + req.params.id
        })
    } else {

        const { point, ...infoRoute } = req.body;

        if (point) {

            prevRoute.points.push(point);

            const route = await Route.findByIdAndUpdate(req.params.id, prevRoute, { new: true })
                .populate('transportation')
                .populate('points');

            return res.json(route);

        } else {

            const route = await Route.findByIdAndUpdate(req.params.id, infoRoute, { new: true })
                .populate('transportation')
                .populate('points');

            return res.json(route);

        }
    }
}

export async function deleteRoute(req: Request, res: Response) {
    const routeDeleted = await Route.findByIdAndDelete(req.params.id);
    return res.json(routeDeleted);
}