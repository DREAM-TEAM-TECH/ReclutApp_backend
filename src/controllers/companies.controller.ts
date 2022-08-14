import { Request, Response } from 'express'
import Company from '../models/Company'

export async function createCompany(req: Request, res: Response) { 
    return res.json({
        message: 'Company created successfully'
    });
}

export async function getCompanies(req: Request, res: Response) { 
    return res.json({
        message: 'Get companies successfully'
    });
}

export async function getCompany(req: Request, res: Response) { 
    return res.json({
        message: 'Get company successfully'
    });
}

export async function updateCompany(req: Request, res: Response) { 
    return res.json({
        message: 'Company updated successfully'
    });
}

export async function deleteCompany(req: Request, res: Response) { 
    return res.json({
        message: 'Company deleted successfully'
    });
}