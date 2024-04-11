import { Schema, model } from 'mongoose';

// Define el esquema del modelo Cotizacion
const CotizacionSchema = new Schema({
  idCotizacion: {
    type: Number,
    required: [true, 'El ID de la cotización es obligatorio']
  },
  fechaCotizacion: {
    type: Date,
    default: Date.now, // Define la fecha de la cotización como la fecha actual por defecto
    required: [true, 'La fecha de la cotización es obligatoria']
  },
  totalCotizacion: {
    type: Number,
    required: [true, 'El total de la cotización es obligatorio']
  }
});

// Crea y exporta el modelo Cotizacion a partir del esquema CotizacionSchema
export default model('Cotizacion', CotizacionSchema);
