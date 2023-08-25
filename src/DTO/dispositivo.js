import { check } from "express-validator";

export const validateDTODispositivo = [
    check('id').notEmpty().withMessage('El id es requerido y debe ser númerico').not().isString(),
    check('marca').notEmpty().isString().withMessage('La marca es requerida'),
    check('modelo').notEmpty().isString().withMessage('El modelo es requerida'),
    check('tipo').notEmpty().isString().withMessage('El tipo es requerida'),
    check('idArea').notEmpty().isNumeric().withMessage('El idArea es requerido')
] 