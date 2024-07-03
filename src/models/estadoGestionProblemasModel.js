import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const estadoGestionProblemasSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now, required: true }
});

export default connection().model('EstadoGestionProblemas', estadoGestionProblemasSchema);

