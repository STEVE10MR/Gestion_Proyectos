import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const rolEquipoSchema = new Schema({
    nombre:{
        type: Schema.Types.String,
        require:true,
        minlength:0,
        maxlength:150
    }
})

rolEquipoSchema.methods.getFields = function(){
    return ['_id','nombre']
}
  

export default connection().model('rolequipo', rolEquipoSchema);