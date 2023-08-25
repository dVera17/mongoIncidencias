import express from 'express';
import { config } from "dotenv";
import routerLogin from './routes/login.routes.js';
import routerArea from './routes/area.routes.js';
import routerDispositivo from './routes/dispositivo.routes.js';
import passportHelper from './config/passportConfig.js';
config();
const app = express();
app.set('port', process.env.PORT_SERVER);
app.use(express.json());
app.use(passportHelper.initialize());
const bearerAuth = passportHelper.authenticate('bearer', { session: false })

app.use('/login', routerLogin);
app.use('/area', bearerAuth, routerArea);
app.use('/dispositivo', bearerAuth, routerDispositivo);

export default app;