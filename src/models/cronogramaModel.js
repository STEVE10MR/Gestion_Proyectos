import mongoose from 'mongoose';
import {connection} from './connectDatabase.js';


const Schema = mongoose.Schema

const validateProgresoInicio = function(value) {
    return value <= this.progresoFin;
};

const validateProgresoFin = function(value) {
    return value >= this.progresoInicio;
};

const cronogramaSchema = new Schema({
    proyecto_id:{
        type: Schema.Types.ObjectId,
        ref:'proyecto',
        unique:true,
        require:true
    },
    metodologia_id:{
        type: Schema.Types.ObjectId,
        ref:'metodologia',
        require:true
    },
    cronogramaFase:[{
        fase_id:{
            type: Schema.Types.ObjectId,
            ref:'fase',
            unique:true,
            require:true
        },
        cronogramaEcs:[{
            ecs_id:{
                type: Schema.Types.ObjectId,
                ref:'ecs',
                //unique:true,
                require:true
            },
            miembros:[{
                rol_id :{
                    type: Schema.Types.ObjectId,
                    ref:'rol',
                    //unique:true,
                    require:true
                },
                equipoProyecto_id :{
                    type: Schema.Types.ObjectId,
                    ref:'equipoproyecto',
                    require:true
                },
                fechaCreacion:{
                    type:Schema.Types.Date
                }
            }],
            requerimientos:[{
                requerimiento_id:{
                    type: Schema.Types.ObjectId,
                    ref:'requerimientofuncional',
                    unique:true,
                    require:true
                },
                user_id :{
                    type: Schema.Types.ObjectId,
                    ref:'user',
                    require:true
                },
                fechaCreacion:{
                    type:Schema.Types.Date
                }
            }],
            tareas:[{
                titulo:{type:String,required:true},
                descripcion:{type:String,required:true},
                equipoProyecto_id :{
                    type: Schema.Types.ObjectId,
                    ref:'equipoproyecto'
                },
                archivos: [{
                    nombre: {
                        type: String,
                        required: true
                    },
                    url: {
                        type: String,
                        required: true
                    },
                    fechaSubida: {
                        type: Schema.Types.Date,
                        default: Date.now
                    }
                }],
                fechaFin:{
                    type:Schema.Types.Date
                }
                ,
                fechaInicio:{
                    type:Schema.Types.Date
                },
                progresoInicio :{
                    type:Schema.Types.Number,
                    default:0,
                    min:0,
                    max:100,
                    validator:{
                        validate:validateProgresoInicio,
                        message:"ERROR_PROGRESO_INICIO"
                    }
                },
                progresoFin :{
                    type:Schema.Types.Number,
                    default:100,
                    min:0,
                    max:100,
                    validator:{
                        validate:validateProgresoFin,
                        message:"ERROR_PROGRESO_FIN"
                    }
                },
            }],
            progresoInicio :{
                type:Schema.Types.Number,
                default:0,
                min:0,
                max:100,
                validator:{
                    validate:validateProgresoInicio,
                    message:"ERROR_PROGRESO_INICIO"
                }
            },
            progresoFin :{
                type:Schema.Types.Number,
                default:100,
                min:0,
                max:100,
                validator:{
                    validate:validateProgresoFin,
                    message:"ERROR_PROGRESO_FIN"
                }
            },
        }],
        progresoInicio :{
            type:Schema.Types.Number,
            default:0,
            min:0,
            max:100,
            validator:{
                validate:validateProgresoInicio,
                message:"ERROR_PROGRESO_INICIO"
            }
        },
        progresoFin :{
            type:Schema.Types.Number,
            default:100,
            min:0,
            max:100,
            validator:{
                validate:validateProgresoFin,
                message:"ERROR_PROGRESO_FIN"
            }
        },
        fechaFin:{
            type:Schema.Types.Date,
            validator:{
                validate:function(value){
                    return value > this.fechaInicio
                },
                message:"ERROR_PROGRESO_FIN"
            }
        },
        fechaInicio:{
            type:Schema.Types.Date,
            validator:{
                validate:function(value){
                    return value < this.fechaFin
                },
                message:"ERROR_PROGRESO_FIN"
            }
        }

    }],
    progresoInicio :{
        type:Schema.Types.Number,
        default:0,
        min:0,
        max:100,
        validator:{
            validate:validateProgresoInicio,
            message:"ERROR_PROGRESO_INICIO"
        }
    },
    progresoFin :{
        type:Schema.Types.Number,
        default:100,
        min:0,
        max:100,
        validator:{
            validate:validateProgresoFin,
            message:"ERROR_PROGRESO_FIN"
        }
    }
})

cronogramaSchema.methods.getFields = function() {
    return [
        'proyecto_id',
        'metodologia_id',
        'fase_id',
        'ecs_id',
        'miembros',
        'requerimientos',
        'progresoInicio',
        'progresoFin',
        'fechaInicio',
        'fechaFin'
    ];
};

export default connection().model('cronograma', cronogramaSchema);