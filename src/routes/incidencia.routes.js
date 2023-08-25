import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { limiterGet } from "../config/rateLimit.js";
import { validateDTOIncidencia } from "../DTO/incidencia.js";
import { postIncidencia, getIncidencias } from "../versiones/v1/incidencia.js";
const router = Router();
const version = routesVersioning();

router.use(limiterGet());
router.post('/', validateDTOIncidencia, version({
    "1.0.0": postIncidencia
}))

router.get('/', version({
    "1.0.0": getIncidencias
}))

export default router;