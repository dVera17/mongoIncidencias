import conn from "../../db/connection.js";
import { validationResult } from "express-validator";
const db = await conn();
const trainer = db.collection("trainer");

export const postTrainer = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);
        let result = await trainer.insertOne(req.body);
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

export const getTrainers = async (req, res) => {
    try {
        let result = await trainer.find({}).toArray();
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}