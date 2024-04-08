import express from 'express';
import prendaRouter from './routes/prenda.js';
import './database/config.js'
import cors from 'cors'

const port = 3000;
const app = express();
app.use(express.json());
app.use('/api/v1', prendaRouter)
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.get('/', (req, res) => {
    res.redirect('/api/v1/');
})
app.listen(port, () => {
    console.log('API RUNNING ON PORT 3000 🚀 YOU CAN SEE THE ROUTES IN localhost:3000/api/v1/prenda')
})