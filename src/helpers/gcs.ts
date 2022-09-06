import { Storage } from '@google-cloud/storage'
import path from 'path'
import stream from 'stream'

const storage = new Storage({
    projectId: 'reclutapp',
    keyFilename: path.join(__dirname, '..', '..', 'reclutapp-b439b9efce03.json'),
});
const bucket = storage.bucket('reclutapp');

export async function uploadTransportationPhoto(requestfile: { originalname: string, buffer: Buffer }, transportation_id: String) {

    const filename = `${Date.now()}-${requestfile.originalname}`;
    const file = bucket.file(`transporations/${transportation_id}/${filename}`);

    const passthroughStream = new stream.PassThrough();
    passthroughStream.write(requestfile.buffer);
    passthroughStream.end();

    async function streamFileUpload() {
        passthroughStream.pipe(file.createWriteStream()).on('finish', () => {
            bucket.file(`transporations/${transportation_id}/${filename}`).makePublic();
        });

        console.log(`${filename} uploaded to ${bucket.name}`);
    }

    await streamFileUpload().catch(console.error);
    const url = `https://storage.googleapis.com/reclutapp/transporations/${transportation_id}/${filename}`;

    return url;
}

export async function uploadCompanyRecord(requestfile: { originalname: string, buffer: Buffer }, companies_id: String) {

    const filename = `${Date.now()}-${requestfile.originalname}`;
    const file = bucket.file(`companies/${companies_id}/${filename}`);

    const passthroughStream = new stream.PassThrough();
    passthroughStream.write(requestfile.buffer);
    passthroughStream.end();

    async function streamFileUpload() {
        passthroughStream.pipe(file.createWriteStream()).on('finish', () => {
            bucket.file(`companies/${companies_id}/${filename}`).makePublic();
        });

        console.log(`${filename} uploaded to ${bucket.name}`);
    }

    await streamFileUpload().catch(console.error);
    const url = `https://storage.googleapis.com/reclutapp/companies/${companies_id}/${filename}`;

    return url;
}

export async function deleteFile(url: String){

    const file = url.replace("https://storage.googleapis.com/reclutapp/", "");
    async function deleteFile() {
        await bucket.file(file).delete();
    }

    deleteFile().catch(console.error);

}