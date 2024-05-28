import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const estadoProblemasSchema = new Schema({
    nombre:{
        type: Schema.Types.String,
        require:true,
        minlength:0,
        maxlength:150
    }
})

estadoProblemasSchema.methods.getFields = function(){
    return ['nombre']
}


export default connection().model('estadoproblemas', estadoProblemasSchema);