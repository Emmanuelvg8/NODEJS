import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://patitodestructor:1013339503@cluster0.0nsjg8n.mongodb.net/modisteria?retryWrites=true&w=majority").then(()=>console.log('Conectado a mongo atlas')).catch(e=>console.error(e))