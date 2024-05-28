import mongoose, { Types } from 'mongoose';
import {connection} from './connectDatabase.js';

const Schema = mongoose.Schema;

const ecsSchema = new Schema({
    proyecto_id:{
        type: Schema.Types.ObjectId,
        ref:'proyecto',
        require:true
    },
    fase_id:{
        type: Schema.Types.ObjectId,
        ref:'fase',
        require:true
    },
    estado_id:{
        type: Schema.Types.ObjectId,
        ref:'estado',
        require:true
    },
    nombre:{
        type:Schema.Types.String,
        require:true,
        minlength:0,
        maxlength:150,
    },
    descripcion:{
        type:Schema.Types.String,
        require:true,
        minlength:0,
        maxlength:150,
    },
    versiones:[{
        version: {
            type: Schema.Types.String,
            required: true,
            minlength: 1,
            maxlength: 50
        },
        fechaInicio: {
            type: Schema.Types.Date,
            default: Date.now
        },
        fechaFin: {
            type: Schema.Types.Date
        },
        active:{
            type:Schema.Types.Boolean,
            default:true
        }
    }],
    componentes:[{
        ecs_id:{
            type:Schema.Types.ObjectId,
            require:true,
            ref:"ecs",
        },
        fecha:{
            type:Schema.Types.Date,
            default: Date.now
        },
    }],
    historialCambios:[{
        user_id:{
            type:Schema.Types.String,
            require:true,
            ref:"user"
        },
        fechaCambio:{
            type:Schema.Types.Date,
        },
        campoModificado: {
            type: Schema.Types.Mixed,
            required: true
        },
        valorAnterior: {
            type: Schema.Types.Mixed,
            required: true
        },
        valorNuevo: {
            type: Schema.Types.String,
            required: true
        }
    }],
    tipoEcs : {
        type: Schema.Types.String,
        enum: ["Software", "Hardware", "Documentación", "Proceso", "Otro"],
        default: "Software"
    },
    tipoTecnologia :{
        type: Schema.Types.String,
        enum: ["Frontend", "Backend", "Base de Datos", "DevOps", "QA"],
        default: "Frontend"
    }
})

ecsSchema.pre('save',async function(next){
    
    console.log(this.isNew)
    
    if(this.isNew){
        return next()
    }
    const cambios = [];

    const original = await this.constructor.findById(this._id)

    const camposModificados = ['proyecto_id', 'fase_id', 'nombre', 'descripcion', 'version','estado_id', 'tipoEcs', 'tipoTecnologia'];
   
    
  
    camposModificados.forEach(campo => {
        if (this.isModified(campo)) {
        cambios.push({
            user_id: this.user_id,
            campoModificado: campo,
            valorAnterior: original[campo],
            valorNuevo: this[campo],
            fechaCambio: new Date()
        });
        }
    });
    
    if (cambios.length > 0) {
        await this.constructor.updateOne(
        { _id: this._id },
        { $push: { historialCambios: { $each: cambios } } }
        );
    }
    
    next()
})

ecsSchema.methods.getFields = function(){
    return ['proyecto_id','fase_id','nombre','descripcion','versiones','composicion','historialCambios','tipoEcs','tipoTecnologia']
}


export default connection().model('ecs', ecsSchema);