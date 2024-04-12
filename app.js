import express from 'express';
import cotizacionRouter from './routes/cotizacion.js'; // Cambiamos la importación para usar el enrutador de cotización
import './database/config.js'; 
import cors from 'cors';

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/cotizaciones', cotizacionRouter); // Actualizamos la ruta del enrutador para las cotizaciones
app.get('/', (req, res) => {
    res.redirect('/api/v1/cotizaciones'); // Redirigimos al enrutador de cotizaciones por defecto
});

app.listen(port, () => {
    console.log('API RUNNING ON PORT 3000 🚀 YOU CAN SEE THE ROUTES IN localhost:3000/api/v1/cotizaciones');
});
