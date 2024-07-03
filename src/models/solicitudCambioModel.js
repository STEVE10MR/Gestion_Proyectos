import {connection} from './connectDatabase.js';
import mongoose from 'mongoose';

const solicitudCambioSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  informeIndicendencia_id: { type: mongoose.Schema.Types.ObjectId, ref: 'InformeIncidencia', required: true },
  archivo: { type: String, required: true },
  nombreDocumento: { type: String, required: true },
  descripcionDocumento: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now, required: true }
});

export default connection().model('SolicitudCambio', solicitudCambioSchema);

