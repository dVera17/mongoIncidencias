import conn from "../../db/connection.js";
const db = await conn();
let area = db.collection("area")

export const getAllAreas = async (req, res) => {
    try {
        let result = await area.find({}).toArray();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export const getAreaByTipoArea = async (req, res) => {
    try {
        let result = await area.aggregate([{ $match: { tipo: req.params.tipoArea } }]).toArray();
        result.length === 0 ? res.send('El tipo de area no existe') : res.send(result)
    } catch (error) {
        res.send(error);
    }
}
