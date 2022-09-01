import { Request, Response } from 'express'
import {Storage} from '@google-cloud/storage'
import Transportation from '../models/Transportation'

const storage = new Storage();

export async function createTransportation(req: Request, res: Response) { 
    const newTransportation = await Transportation.create(req.body); 
    return res.json({
        message: 'Transportation created successfully'
    });
}

export async function getTransportations(req: Request, res: Response) { 
    const transportations = await Transportation.find();
    return res.json(transportations);
}

export async function getTransportation(req: Request, res: Response) { 
    let transportation = await Transportation.findOneAndUpdate(req.params, req.body);
    return res.json(transportation);
}

export async function updateTransportation(req: Request, res: Response) { 
    let transportation = await Transportation.findOneAndUpdate(req.params, req.body);
    return res.json({
        message: 'Transportation updated successfully'
    });
}

export async function deleteTransportation(req: Request, res: Response) { 
    const transportation = await Transportation.findOneAndDelete(req.params);
    return res.json({
        message: 'Transportation deleted successfully'
    });
}

export async function addPhoto(req: Request, res: Response) { 
    //Upload to GCS
    // Append items to `friends`
    //doc.friends.push('Maria')
    return res.json({
        message: 'Photo uploaded to transportation successfully'
    });
}