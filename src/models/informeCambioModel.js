import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';
const Schema = mongoose.Schema;

const informeCambioSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    gestionCambio_id: { type: Schema.Types.ObjectId, ref: 'GestionProblemas', required: true },
    tipoCambio: [String],
    nivelCambio: [String],
    estado: [String],
    archivo: String,
    nombreArchivo: String,
    descripcionProblema: String,
    criterioAprobacionRechazo: String,
    efectosSecundarios: String,
    costoEstimado: Number
});

export default connection().model('InformeCambio', informeCambioSchema);
