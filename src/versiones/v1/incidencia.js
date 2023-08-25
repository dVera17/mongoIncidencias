import conn from "../../db/connection.js";
import { validationResult } from "express-validator";
const db = await conn();
const incidencia = db.collection("incidencia");

export const postIncidencia = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);

        const incidenciaData = {
            id: req.body.id,
            descripcion: req.body.descripcion,
            fecha: new Date(req.body.fecha),
            categoria: req.body.categoria,
            tipo: req.body.tipo,
            id_area: req.body.id_area
        };
        let result = await incidencia.insertOne(incidenciaData);
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

export const getIncidencias = async (req, res) => {
    try {
        let result = await incidencia.find({}).toArray();
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}