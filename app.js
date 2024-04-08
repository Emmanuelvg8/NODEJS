import express from 'express';
import prendaRouter from './routes/prenda.js';
import './database/config.js'
import cors from 'cors'

const port = 3000;
const app = express();
app.use(express.json());
app.use('/api/v1', prendaRouter)
app.use(cors())
app.get('/', (req, res) => {
    res.redirect('/api/v1/');
})
app.listen(port, () => {
    console.log('API RUNNING ON PORT 3000 🚀 YOU CAN SEE THE ROUTES IN localhost:3000/api/v1/prenda')
})