import app from './app'
import { connection } from './database'
import schedule from 'node-schedule'
import { deleteAllCandidates } from './controllers/candidates.controller'
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
