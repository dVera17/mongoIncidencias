import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { crearToken } from "../config/JWT.js";
import { limiterLogin } from "../config/rateLimit.js";
import { loginV1 } from "../versiones/v1/login.js";
const router = Router();
const version = routesVersioning()

router.use(limiterLogin(), crearToken)
router.post('/', version({
    "1.0.0": loginV1
}))

export default router;