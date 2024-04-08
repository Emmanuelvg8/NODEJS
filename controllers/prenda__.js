import { response } from 'express'; // Importa la función response desde el módulo express
import Prenda from '../model/prenda.js';
// Controlador para la solicitud GET a la ruta de usuarios
export const prendaGet = async (req, res) => {
    const prendaFinded = await Prenda.find()
    res.status(200).json({
        msg: 'Status 200 - Ok',
        prenda: prendaFinded
    })
};
export const prendaGetOne = async (req, res) => {
    const prendaFinded = await Prenda.findById(req.params.id)
    res.status(200).json({
        msg: 'Status 200 - Ok',
        prenda: prendaFinded
    })
};

// Controlador para la solicitud POST a la ruta de prendas
export const prendaPost = async (req, res) => {
    try {
        const prendaCreated = new Prenda(req.body)
        await prendaCreated.save();
        res.status(200).json({
            msg: 'Status 200 - Ok',
            info: 'Prenda creada correctamente',
            prenda: prendaCreated
        })
    } catch (e) {
        res.status(401).json({error: e})
    }
};

// Controlador para la solicitud PUT a la ruta de usuarios
export const prendaPut = async (req, res) => {
    try {

        const { id } = req.params;
        const prendaUpdated = await Prenda.findByIdAndUpdate(id, req.body)
        res.json({
            msg: 'Prenda actualizada con éxito',
            infoPrenda: prendaUpdated// Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con PUT
        });
    } catch (e) {
        res.status(401).json({error: e})
    }

};

// Controlador para la solicitud DELETE a la ruta de usuarios
export const prendaDelete = async(req, res) => {
    try {
        const { id } = req.params;
        const prendaDeleted = await Prenda.findByIdAndDelete(id)
        res.json({
            msg: 'Prenda borrada con éxito',
            infoPrenda: prendaDeleted// Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con PUT
        });
    } catch (e) {
        res.status(401).json({ error: e })
    }
};

// Exporta los controladores de las rutas de usuarios para que estén disponibles para otros módulos