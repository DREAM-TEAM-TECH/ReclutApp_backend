import { Request, Response } from 'express'
import { deleteFile, uploadCompanyRecord } from '../helpers/gcs';
import Company from '../models/Company'

export async function createCompany(req: Request, res: Response) { 
    const newCompany = await Company.create(req.body);
    return res.json({
        message: 'Company created successfully'
    });
}

export async function getCompanies(req: Request, res: Response) { 
    const companies = await Company.find();
    return res.json(companies);
}

export async function getCompany(req: Request, res: Response) { 
    const company = await Company.findById(req.params.id).populate('users', 'vacants', 'routes', 'records').populate('transportations');
    return res.json(company);
}

export async function updateCompany(req: Request, res: Response) { 
    let company = await Company.findOneAndUpdate(req.params, req.body);
    return res.json({
        message: 'Company updated successfully'
    });
}

export async function deleteCompany(req: Request, res: Response) { 
    const company = await Company.findOneAndDelete(req.params);
    return res.json({
        message: 'Company deleted successfully'
    });
}

export async function addRecord(req: Request, res: Response) { 
    
    //Upload to GCS
    if (!req.file) {
        return res.json({
            message: 'Please upload a photo!'
        });
    }
    uploadCompanyRecord(req.file, req.params.id).then(
        async res => {
            //Push link to records
            await Company.updateOne({ _id: req.params.id }, { $push: { records: res } })
        }
    );

    return res.json({
        message: 'Record uploaded to company successfully'
    });
}

export async function removeRecord(req: Request, res: Response) { 
    
    //Delete from GCS
    await deleteFile(req.body.src);

    // Remove link from `records`
    await Company.updateOne({ _id: req.params.id }, { $pull: { records: req.body.src } })

    return res.json({
        message: 'Record removed from company successfully'
    });
}