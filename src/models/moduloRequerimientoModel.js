import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const moduloRequerimientoFuncionalSchema = new Schema({
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

moduloRequerimientoFuncionalSchema.methods.getFields = function(){
    return ['nombre','descripcion']
}

export default connection().model('modulorequerimientofuncional', moduloRequerimientoFuncionalSchema);