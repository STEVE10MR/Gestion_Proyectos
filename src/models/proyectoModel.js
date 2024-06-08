import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';
import cronogramaModel from './cronogramaModel.js';
const Schema = mongoose.Schema;

const proyectoSchema = new Schema({
    metodologia_id:{
        type: Schema.Types.ObjectId,
        ref:'metodologia',
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
    },
    fechaInicio: {
        type: Schema.Types.Date,
        default: Date.now
    },
    fechaFin: {
        type: Schema.Types.Date
    }
})

proyectoSchema.pre('save',async function(next){

    const cronograma = await cronogramaModel.create({proyecto_id:this._id,metodologia_id:this.metodologia_id})
    next()
})

proyectoSchema.methods.getFields = function(){
    return ['metodologia_id','estado_id','nombre','descripcion','fechaInicio','fechaFin']
}

export default connection().model('proyecto', proyectoSchema);