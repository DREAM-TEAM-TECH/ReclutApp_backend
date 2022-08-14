import { Request, Response } from 'express'
import Candidate from '../models/Candidate'

export async function createCandidate(req: Request, res: Response) { 
    return res.json({
        message: 'Candidate created successfully'
    });
}

export async function getCandidates(req: Request, res: Response) { 
    return res.json({
        message: 'Get candidates successfully'
    });
}

export async function getCandidate(req: Request, res: Response) { 
    return res.json({
        message: 'Get candidates successfully'
    });
}

export async function updateCandidate(req: Request, res: Response) { 
    return res.json({
        message: 'Candidate updated successfully'
    });
}

export async function deleteCandidate(req: Request, res: Response) { 
    return res.json({
        message: 'Candidate deleted successfully'
    });
}