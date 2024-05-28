import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const miembroCambioSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref:'user',
        require:true
    },
    proyecto_id:{
        type: Schema.Types.ObjectId,
        ref:'proyecto',
        require:true
    }
})

miembroCambioSchema.methods.getFields = function(){
    return ['user_id','proyecto_id']
}


export default connection().model('miembrocambio', miembroCambioSchema);