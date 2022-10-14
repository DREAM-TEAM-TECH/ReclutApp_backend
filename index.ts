import app from './src/app'
import { connection } from './src/database'
import schedule from 'node-schedule'
import { deleteAllCandidates } from './src/controllers/candidates.controller'
import dotenv from 'dotenv'

async function main() {
    dotenv.config();
    connection();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
    const job = schedule.scheduleJob({hour: 23, minute: 59}, () => {
        deleteAllCandidates();
    });
}

main();
