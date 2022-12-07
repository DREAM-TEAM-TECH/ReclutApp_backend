"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const database_1 = require("./src/database");
const node_schedule_1 = __importDefault(require("node-schedule"));
const candidates_controller_1 = require("./src/controllers/candidates.controller");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
async function main() {
    dotenv_1.default.config();
    await (0, database_1.connection)();
    app_1.default.use((0, cors_1.default)());
    app_1.default.listen(app_1.default.get('port'));
    console.log('Server on port', app_1.default.get('port'));
    const deleteJob = node_schedule_1.default.scheduleJob({ hour: 17, minute: 10 }, () => {
        (0, candidates_controller_1.deleteAllCandidates)();
    });
    const exportJob = node_schedule_1.default.scheduleJob({ hour: 18, minute: 7 }, () => {
        (0, candidates_controller_1.exportToCsv)();
    });
}
main();
