import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const equipoProyectoSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref:'user',
        require:true
    },
    rolEquipo_id:{
        type: Schema.Types.ObjectId,
        ref:'rolequipo',
        require:true
    },
    proyecto_id:{
        type: Schema.Types.ObjectId,
        ref:'proyecto',
        require:true
    }
})

equipoProyectoSchema.methods.getFields = function(){
    return ['user_id','rolEquipo_id','proyecto_id']
}

export default connection().model('equipoproyecto', equipoProyectoSchema);