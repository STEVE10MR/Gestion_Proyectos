import mongoose from 'mongoose';

const detalleGestionProblemasSchema = new mongoose.Schema({
  gestionProblemas_id: { type: mongoose.Schema.Types.ObjectId, ref: 'GestionProblemas', required: true },
  solicitudCambio_id: { type: mongoose.Schema.Types.ObjectId, ref: 'SolicitudCambio', required: true },
  descripcion: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now, required: true }
});

export default connection().model('DetalleGestionProblemas', detalleGestionProblemasSchema);

