import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const requerimientoFuncionalSchema = new Schema({
    proyecto_id:{
        type: Schema.Types.ObjectId,
        ref:'proyecto',
        require:true
    },
    requerimientoModulo_id:{
        type: Schema.Types.ObjectId,
        ref:'modulorequerimientofuncional',
        require:true
    },
    estado_id:{
        type: Schema.Types.ObjectId,
        ref:'estado',
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

requerimientoFuncionalSchema.methods.getFields = function(){
    return ['proyecto_id','requerimientoModulo_id','estado_id','nombre','descripcion']
}

export default connection().model('requerimientofuncional', requerimientoFuncionalSchema);