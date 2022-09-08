import { Request, Response } from 'express'
import Candidate from '../models/Candidate'

export async function createCandidate(req: Request, res: Response) { 
    const newCandidate = await Candidate.create(req.body); 
    return res.json({
        message: 'Candidate created successfully'
    });
}

export async function getCandidates(req: Request, res: Response) { 
    const candidates = await Candidate.find().populate('point', 'vacant', 'company');
    return res.json(candidates);
}

export async function getCandidate(req: Request, res: Response) { 
    const candidate = await Candidate.findById(req.params.id).populate('point', 'vacant', 'company');
    return res.json(candidate);
}

export async function updateCandidate(req: Request, res: Response) { 
    let candidate = await Candidate.findOneAndUpdate(req.params, req.body);
    return res.json({
        message: 'Candidate updated successfully'
    });
}

export async function deleteCandidate(req: Request, res: Response) { 
    const candidate = await Candidate.findOneAndDelete(req.params);
    return res.json({
        message: 'Candidate deleted successfully'
    });
}

export async function deleteAllCandidates(){
    const candidates = await Candidate.deleteMany({});
    console.log(`${Date.now()} candidates removed`)
}