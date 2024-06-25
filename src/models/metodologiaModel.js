import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const metodologiaSchema = new Schema({
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
    },
    active: {
        type: Boolean,
        default: true,
        select: true
    }
})

metodologiaSchema.virtual('fases',{
    ref:"fase",
    foreignField:"metodologia_id",
    localField:"_id"
})

metodologiaSchema.methods.getFields = function(){
    return ['nombre','descripcion']
}


export default connection().model('metodologia', metodologiaSchema);