import { Router } from 'express';
const router = Router(); 

import { cotizacionGet, cotizacionPost, cotizacionPut, cotizacionDelete, cotizacionGetOne } from '../controllers/cotizacion.js'; // Importa los controladores desde el archivo '../controllers/cotizacion'


router.get('/', cotizacionGet).get('/:id', cotizacionGetOne).post('/', cotizacionPost).put('/:id', cotizacionPut).delete('/:id', cotizacionDelete);

export default router;

