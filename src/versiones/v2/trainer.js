import conn from "../../db/connection.js";
const db = await conn();
const trainer = db.collection("trainer");

export const getTrainerByCedula = async (req, res) => {
    try {
        let result = await trainer.findOne({ cedula: 123 }).toArray();
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}