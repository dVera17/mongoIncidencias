import { check } from "express-validator";

export const validateDTOIncidencia = [
    check('id').notEmpty().isNumeric().not().isString().withMessage('id debe ser númerico y es requerido'),
    check('descripcion').notEmpty().isString().withMessage('descripcion es requerida'),
    check('fecha').notEmpty().isISO8601().withMessage('fecha es requerido y debe tener un formato valido'),
    check('categoria').notEmpty().isString().withMessage('Categoria es requerida y solo puede ser [`hardware`, `software`]'),
    check('tipo').notEmpty().isString().withMessage('tipo es requerido y debe ser leve, moderada o critica'),
    check('id_area').notEmpty().not().isString().withMessage('id_area es requerido y debe ser un entero')
]