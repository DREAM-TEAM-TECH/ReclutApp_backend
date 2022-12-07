import { Storage } from '@google-cloud/storage'
import path from 'path'
import stream from 'stream'
import nodemailer from 'nodemailer'

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

export async function deleteFile(url: String) {

    const file = url.replace("https://storage.googleapis.com/reclutapp/", "");
    async function deleteFile() {
        await bucket.file(file).delete();
    }

    deleteFile().catch(console.error);

}

export async function uploadCandidatesCSV(candidates: {}[]) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();

    const file = bucket.file(`records/${dd + '/' + mm + '/' + yyyy}_candidates.csv`);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'reclutapp.client@gmail.com',
            pass: process.env.EMAIL_PASSWORD as string,
        }
    });

    function jsonToCsv(items: any) {
        const header = Object.keys(items[0]);

        const headerString = header.join(',');

        // handle null or undefined values here
        const replacer = (key: any, value: any) => value ?? '';

        const rowItems = items.map((row: any) =>
            header
                .map((fieldName) => JSON.stringify(row[fieldName], replacer))
                .join(',')
        );

        // join header and body, and break into separate lines
        const csv = [headerString, ...rowItems].join('\r\n');

        return csv;
    }

    const csv = jsonToCsv(JSON.parse(JSON.stringify(candidates)))

    const passthroughStream = new stream.PassThrough();
    passthroughStream.write(csv);
    passthroughStream.end();

    async function streamFileUpload() {
        passthroughStream.pipe(file.createWriteStream().on('finish', () => {
            bucket.file(`records/${dd + '/' + mm + '/' + yyyy}_candidates.csv`).makePublic();

            var mailOptions = {
                from: 'reclutapp.client@gmail.com',
                to: 'reclutapp.client@gmail.com',
                subject: `${dd + '/' + mm + '/' + yyyy} candidates`,
                text: `CSV link: https://storage.googleapis.com/reclutapp/records/${dd + '/' + mm + '/' + yyyy}_candidates.csv`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }));
        console.log(`CSV uploaded to ${bucket.name}`);
    }

    await streamFileUpload().catch(console.error);
}

