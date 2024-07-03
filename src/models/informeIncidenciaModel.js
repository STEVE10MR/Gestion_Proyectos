import {connection} from './connectDatabase.js';
import mongoose from 'mongoose';

const informeIncidenciaSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ecs_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ecs', required: true },
  archivo: { type: String, required: true },
  nombreDocumento: { type: String, required: true },
  descripcionDocumento: { type: String, required: true },
  indicacionesDocumento: { type: String, required: true },
  tiposPruebasDocumento: { type: String, required: true },
  efectosDocumento: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now, required: true },
  fechaActualizado: { type: Date },
  fechaFin: { type: Date }
});

export default connection().model('InformeIncidencia', informeIncidenciaSchema);


