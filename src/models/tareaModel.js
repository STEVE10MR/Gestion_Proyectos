import mongoose, { Types } from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema

const tareaSchema = new Schema({
    equipoProyecto_id: {
        type: Schema.Types.ObjectId,
        ref: 'equipoProyecto',
        required: true
    },
    nombre: {
        type: Schema.Types.String,
        required: true,
        minlength: 1,
        maxlength: 150
    },
    descripcion: {
        type: Schema.Types.String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    justificacion: {
        type: Schema.Types.String,
        minlength: 1,
        maxlength: 500
    },
    porcentajeAvance: {
        type: Schema.Types.Number,
        min: 0,
        max: 100
    },
    urlGithub: {
        type: Schema.Types.String,
        minlength: 1,
        maxlength: 200
    },
    fechaInicio: {
        type: Schema.Types.Date
    },
    fechaFin: {
        type: Schema.Types.Date
    },
    active: {
        type: Boolean,
        default: true,
        select: true
      }
});


export default connection().model('tarea', tareaSchema);