import { check } from "express-validator";

export const validateDTOTrainer = [
    check('cedula').notEmpty().isNumeric().not().isString().withMessage('La cedula debe ser un entero y es requerida'),
    check('nombre').notEmpty().isString().withMessage('El nombre es requerido y debe ser un string'),
    check('telefono').notEmpty().isString().matches(/^[0-9]+$/).withMessage('El telefono es requerido y solo acepta numeros'),
    check('emailPersonal').notEmpty().isEmail().optional(),
    check('emailCorp').notEmpty().isEmail().withMessage('El emailPersonal es requerido y debe ser un correo valido'),
] 