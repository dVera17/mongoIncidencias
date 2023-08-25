import { body, validationResult } from "express-validator";

export const validateDTODispositivo = [
    body('id').notEmpty().isNumeric().withMessage('El id es requerido'),
    body('marca').notEmpty().isString().withMessage('La marca es requerida'),
    body('modelo').notEmpty().isString().withMessage('El modelo es requerida'),
    body('idArea').notEmpty().isNumeric().withMessage('El idArea es requerido')
]

export const errDTO = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
}