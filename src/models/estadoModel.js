import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const estadoSchema = new Schema({
    nombre:{
        type: Schema.Types.String,
        require:true,
        minlength:0,
        maxlength:150
    },
    active: {
        type: Boolean,
        default: true,
        select: true
    }
})

estadoSchema.methods.getFields = function(){
    return ['nombre']
}


export default connection().model('estado', estadoSchema);