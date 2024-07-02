
import mongoose from 'mongoose';

const gestionProblemasSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  estadoGestionProblemas: { type: mongoose.Schema.Types.ObjectId, ref: 'EstadoGestionProblemas', required: true },
  costoEstimado: { type: Number, required: true },
  fechaCreacion: { type: Date, default: Date.now, required: true }
});

export default connection().model('GestionProblemas', gestionProblemasSchema);


