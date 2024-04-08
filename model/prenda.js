import { Schema, model } from 'mongoose'; // Importa las funciones Schema y model de mongoose para definir esquemas y modelos de datos
// Define el esquema del modelo Usuario
const PrendaSchema = new Schema({
  idPrenda: {
    type: Number,
    required: [true, 'El ID es obligatorio'] // Define que el campo nombre es obligatorio
  },
  nombrePrenda: {
    type: String,
    required: [true, 'El Nombre es obligatorio'] // Define que el campo email es obligatorio
  },
  tallaPrenda: {
    type: String,
    required: [true, 'La cantidad total es obligatoria'], // Define que el campo password es obligatorio
  },
  imagenPrenda: {
    type: String,
    required: true, // Define que el campo rol es obligatorio
  },
  cantidadPrenda: {
    type: Number,
    required: true
  },
  objetivoPrenda: {
    type: String,
    minlength: 1, // Define la longitud mínima del campo password
    maxlength: [600, 'La descripción no puede pasar los 600 caracteres'] // Define la longitud máxima del campo password
  },
  tipoTela: {
    type: String,
  }
});


// Crea y exporta el modelo Usuario a partir del esquema UsuarioSchema
export default model('Prenda',PrendaSchema);
