import { Router } from 'express';
const router = Router(); 

import { prendaGet, prendaPost, prendaPut, prendaDelete, prendaGetOne } from '../controllers/prenda__.js'; // Importa los controladores desde el archivo '../controllers/usuario'


router.get('/', prendaGet).get('/:id', prendaGetOne).post('/', prendaPost).put('/:id', prendaPut).delete('/:id', prendaDelete);

export default router;

