import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const faseSchema = new Schema({
    metodologia_id:{
        type: Schema.Types.ObjectId,
        ref:'metodologia',
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


faseSchema.methods.getFields = function(){
    return ['metodologia_id','nombre','descripcion']
}

export default connection().model('fase', faseSchema);