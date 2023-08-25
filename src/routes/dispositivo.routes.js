import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { limiterGet } from "../config/rateLimit.js";
import { postDispositivo, getDispositivos, getTipoDispositivos } from "../versiones/v1/dispositivo.js";
import { validateDTODispositivo } from "../DTO/dispositivo.js";
const router = Router();
const version = routesVersioning()

router.use(limiterGet());
router.post('/', validateDTODispositivo, version({
    "1.0.0": postDispositivo
}))
 
router.get('/', version({
    "1.0.0": getDispositivos
}))

router.get('/:tipo_dispositivo', version({
    "1.0.0": getTipoDispositivos
}))

export default router;