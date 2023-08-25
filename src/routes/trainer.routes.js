import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { limiterGet } from "../config/rateLimit.js";
import { validateDTOTrainer } from "../DTO/trainer.js";
import { postTrainer, getTrainers } from "../versiones/v1/trainer.js";
import { getTrainerByCedula } from "../versiones/v2/trainer.js";
const router = Router();
const version = routesVersioning();

router.use(limiterGet());
router.post('/', validateDTOTrainer, version({
    "1.0.0": postTrainer
}))

router.get('/', version({
    "1.0.0": getTrainers
}))

router.get('/:cedula', version({
    "2.0.0": getTrainerByCedula
}))

export default router;