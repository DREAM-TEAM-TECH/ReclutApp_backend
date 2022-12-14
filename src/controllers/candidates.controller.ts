import { Request, Response } from 'express'
import Candidate from '../models/Candidate'
import { uploadCandidatesCSV } from '../helpers/gcs';

export async function createCandidate(req: Request, res: Response) {
    const newCandidate = await Candidate.create(req.body);
    const candidate = await Candidate.findById(newCandidate)
        .populate('vacant')
        .populate('company')
        .populate('point')
    return res.json(candidate);
}

export async function getCandidates(req: Request, res: Response) {
    const candidates = await Candidate.find()
        .populate('vacant')
        .populate('company')
        .populate('point')
    return res.json(candidates);
}

export async function getCandidatesByPoint(req: Request, res: Response) {
    const candidates = await Candidate.find({ point: req.params.id })
        .populate('vacant')
        .populate('company')
        .populate('point')
    return res.json(candidates);
}

export async function getCandidate(req: Request, res: Response) {
    const candidate = await Candidate.findById(req.params.id)
        .populate('vacant')
        .populate('company')
        .populate('point')
    return res.json(candidate);
}

export async function updateCandidate(req: Request, res: Response) {
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json({
        message: 'Candidate updated successfully',
        candidate
    });
}

export async function deleteCandidate(req: Request, res: Response) {
    const candidate = await Candidate.findByIdAndDelete(req.params.id);
    return res.json({
        message: 'Candidate deleted successfully',
        candidate
    });
}

export async function deleteAllCandidates(req: Request, res: Response) {
    const candidates = await Candidate.deleteMany({});
    console.log(`${Date.now()} candidates removed`)
    return res.json({
        msg: `${Date.now()} candidates removed`,
        candidates,
    })
}

export async function exportToCsv(req: Request, res: Response) {
    const candidates = await Candidate.find()
    uploadCandidatesCSV(candidates).then(() => {
        return res.json({
            msg: 'CSV uploaded'
        })
    })


}