import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const detalleInformeCambioSchema = new Schema({
    informeCambio_id: { type: Schema.Types.ObjectId, ref: 'InformeCambio', required: true },
    cronogramaEcs: [{
        archivo: { type: Schema.Types.ObjectId }
    }]
});

export default connection().model('DetalleInformeCambio', detalleInformeCambioSchema);
