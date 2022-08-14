import app from './app'
import { connection } from './database'

async function main() {
    connection();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();