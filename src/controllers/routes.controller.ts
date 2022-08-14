import { Request, Response } from 'express'
import Route from '../models/Route'

export async function createRoute(req: Request, res: Response) { 
    return res.json({
        message: 'Route created successfully'
    });
}

export async function getRoutes(req: Request, res: Response) { 
    return res.json({
        message: 'Get routes successfully'
    });
}

export async function getRoute(req: Request, res: Response) { 
    return res.json({
        message: 'Get route successfully'
    });
}

export async function updateRoute(req: Request, res: Response) { 
    return res.json({
        message: 'Route updated successfully'
    });
}

export async function deleteRoute(req: Request, res: Response) { 
    return res.json({
        message: 'Route deleted successfully'
    });
}