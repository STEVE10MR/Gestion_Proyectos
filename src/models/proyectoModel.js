import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const proyectoSchema = new Schema({
    metodologia_id:{
        type: Schema.Types.ObjectId,
        ref:'metodologia',
        require:true
    },
    estado_id:{
        type: Schema.Types.ObjectId,
        ref:'requerimientoModulo',
        require:true
    },
    nombre:{
        type: Schema.Types.String,
        require:true,
        minlength:0,
        maxlength:150
    },
    descripcion:{
        type: Schema.Types.String,
        require:true,
        minlength:0,
        maxlength:150
    }
})

proyectoSchema.methods.getFields = function(){
    return ['metodologia_id','estado_id','nombre','descripcion']
}

export default connection().model('proyecto', proyectoSchema);