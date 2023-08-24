import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { limiterGet } from "../config/rateLimit.js";
import { getAllAreas, getAreaByTipoArea } from "../versiones/v1/area.js";
const router = Router();
const version = routesVersioning()

router.use(limiterGet());
router.get('/', version({
    "1.0.0": getAllAreas
}))

router.get('/:tipoArea', version({
    "1.0.0": getAreaByTipoArea
}))

export default router;