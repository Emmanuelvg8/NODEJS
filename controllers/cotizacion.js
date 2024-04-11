import { response } from 'express';
import Cotizacion from '../model/cotizacion.js'; // Cambiamos el import para usar el modelo de cotización

// Controlador para la solicitud GET a la ruta de cotizaciones
export const cotizacionGet = async (req, res) => {
    const cotizacionFinded = await Cotizacion.find();
    res.status(200).json({
        msg: 'Status 200 - Ok',
        cotizacion: cotizacionFinded
    });
};

// Controlador para la solicitud GET de una cotización específica
export const cotizacionGetOne = async (req, res) => {
    const cotizacionFinded = await Cotizacion.findById(req.params.id);
    res.status(200).json({
        msg: 'Status 200 - Ok',
        cotizacion: cotizacionFinded
    });
};

// Controlador para la solicitud POST a la ruta de cotizaciones
export const cotizacionPost = async (req, res) => {
    try {
        const cotizacionCreated = new Cotizacion(req.body);
        await cotizacionCreated.save();
        res.status(200).json({
            msg: 'Status 200 - Ok',
            info: 'Cotización creada correctamente',
            cotizacion: cotizacionCreated
        });
    } catch (e) {
        res.status(401).json({ error: e });
    }
};

// Controlador para la solicitud PUT a la ruta de cotizaciones
export const cotizacionPut = async (req, res) => {
    try {
        const { id } = req.params;
        const cotizacionUpdated = await Cotizacion.findByIdAndUpdate(id, req.body);
        res.json({
            msg: 'Cotización actualizada con éxito',
            infoCotizacion: cotizacionUpdated
        });
    } catch (e) {
        res.status(401).json({ error: e });
    }
};

// Controlador para la solicitud DELETE a la ruta de cotizaciones
export const cotizacionDelete = async(req, res) => {
    try {
        const { id } = req.params;
        const cotizacionDeleted = await Cotizacion.findByIdAndDelete(id);
        res.json({
            msg: 'Cotización borrada con éxito',
            infoCotizacion: cotizacionDeleted
        });
    } catch (e) {
        res.status(401).json({ error: e });
    }
};