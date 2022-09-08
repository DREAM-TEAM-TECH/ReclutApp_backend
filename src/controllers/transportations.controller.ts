import { Request, Response } from 'express'
import Transportation from '../models/Transportation'
import { deleteFile, uploadTransportationPhoto } from '../helpers/gcs'

export async function createTransportation(req: Request, res: Response) {
    const newTransportation = await Transportation.create(req.body);

    //Upload to GCS
    if (!req.file) {
        return res.json({
            message: 'Please upload a photo!'
        });
    }
    uploadTransportationPhoto(req.file, req.params.id).then(
        async res => {
            //Append items to `transportations`
            await Transportation.updateOne({ _id: newTransportation.id }, { $push: { photos: res } })
        }
    );

    return res.json({
        message: 'Transportation created successfully'
    });
}

export async function getTransportations(req: Request, res: Response) {
    const transportations = await Transportation.find();
    return res.json(transportations);
}

export async function getTransportation(req: Request, res: Response) {
    const transportation = await Transportation.findById(req.params.id);
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
    if (!req.file) {
        return res.json({
            message: 'Please upload a photo!'
        });
    }
    uploadTransportationPhoto(req.file, req.params.id).then(
        async res => {
            //Append items to `transportations`
            await Transportation.updateOne({ _id: req.params.id }, { $push: { photos: res } })
        }
    );

    return res.json({
        message: 'Photo uploaded to transportation successfully'
    });
}

export async function removePhoto(req: Request, res: Response) {

    //Delete from GCS
    await deleteFile(req.body.src);

    // Remove link from `photos`
    await Transportation.updateOne({ _id: req.params.id }, { $pull: { photos: req.body.src } })

    return res.json({
        message: 'Photo removed from transportation successfully'
    });
}