import app from './app'
import { connection } from './database'
import schedule from 'node-schedule'

async function main() {
    connection();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
    const job = schedule.scheduleJob({hour: 23, minute: 59}, () => {
        console.log(`${Date.now()} candidates removed`)
    });
}

main();