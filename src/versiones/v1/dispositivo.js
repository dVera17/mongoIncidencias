import { validationResult } from "express-validator";
import conn from "../../db/connection.js";
const db = await conn();
const dispositivo = db.collection("dispositivo");

export const postDispositivo = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);
        let result = await dispositivo.insertOne(req.body);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

export const getDispositivos = async (req, res) => {
    try {
        let result = await dispositivo.find({}).toArray();
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

export const getTipoDispositivos = async (req, res) => {
    try {
        let result = await dispositivo.find({ tipo: req.params.tipo_dispositivo }).toArray();
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}