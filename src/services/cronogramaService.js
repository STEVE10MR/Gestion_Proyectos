import * as cronogramaRepository from "../repositories/cronogramaRepository.js"
import mongoose from "mongoose";

const verificarFechas=(fechaFin,fechaInicio)=>{
    const fechaFinObj = new Date(fechaFin);
    const fechaInicioObj = new Date(fechaInicio);


    if (isNaN(fechaFinObj) || isNaN(fechaInicioObj)) {
        return true
    }
    const fechaFinMili = new Date(fechaFinObj).getTime()
    const fechaInicioMili = new Date(fechaInicioObj).getTime()+(7 * 24 * 60 * 60 * 1000)

    if(fechaInicioMili>=fechaFinMili){
        return true
    }

    return false
}


export const agregarFaseCronogramaService = async(_id,fase_id,fechaFin,fechaInicio)=>{

    if(verificarFechas(fechaFin,fechaInicio)){
        return {messageError:'ERROR_MESSAGE'}
    }
    let ecsObject = null
    try{
        ecsObject=await cronogramaRepository.editarCronogramaRepository({_id,"cronogramaFase.fase_id":fase_id},{
            $set:{
                'cronogramaFase.$.fase_id':fase_id,
                'cronogramaFase.$.fechaFin':fechaFin,
                'cronogramaFase.$.fechaInicio':fechaInicio
        }}) 
        if(!ecsObject) throw new Error("generate")
    }
    catch(err){
        ecsObject=await cronogramaRepository.editarCronogramaRepository({_id},{$push:{'cronogramaFase':{fase_id,fechaFin:fechaFin,fechaInicio:fechaInicio}}})
    }
    if(!ecsObject){
        return {messageError:'ERROR_MESSAGE'}
    }
    return ecsObject
}


export const quitarFaseCronogramaService = async(_id,fase_id)=>{
    const ecsObject=await cronogramaRepository.editarCronogramaRepository({_id},{$pull:{cronogramaFase:{fase_id}}})
    if(!ecsObject){
        return {messageError:'ERROR_MESSAGE'}
    }
    return ecsObject
}

export const agregarEcsCronogramaService = async (_id, fase_id, ecs_id) => {
    

    let ecsObject =undefined

    try{
        ecsObject=await cronogramaRepository.editarCronogramaRepository({_id,"cronogramaFase.fase_id":fase_id,"cronogramaFase.cronogramaEcs.ecs_id":ecs_id}) 
        if(!ecsObject) throw new Error("generate")
    }
    catch(err){
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id },
            {
                $push: {
                    'cronogramaFase.$.cronogramaEcs': { ecs_id}
                }
            }
        );
    }
    if(!ecsObject){
        return {messageError:'ERROR_MESSAGE'}
    }
    return ecsObject
};

export const agregarRequerimientoEcsCronogramaService = async (_id, fase_id, ecs_id, requerimiento_id, project_manager_id) => {
    
    const requerimientos = { requerimiento_id, user_id: project_manager_id };
    let ecsObject=null
    try{
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id ,"cronogramaFase.cronogramaEcs.requerimientos.requerimiento_id": requerimiento_id},
            {
                $set: {
                    'cronogramaFase.$[f].cronogramaEcs.$[s].requerimientos.$[r].user_id': project_manager_id,
                    'cronogramaFase.$[f].cronogramaEcs.$[s].requerimientos.$[r].requerimiento_id': requerimiento_id
                }
            },undefined,
            {
                arrayFilters: [
                    { "f.fase_id": fase_id },
                    { "s.ecs_id": ecs_id },
                    { "r.requerimiento_id": requerimiento_id }
                ],
                new: true
            }
        );
        if(!ecsObject) throw new Error("generate")
    }
    catch(err){
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id },
            {
                $push: {
                    'cronogramaFase.$[f].cronogramaEcs.$[s].requerimientos': { ...requerimientos}
                }
            },undefined,
            {
                arrayFilters: [
                    { "f.fase_id": fase_id },
                    { "s.ecs_id": ecs_id },
                ],
                new: true
            }
        );
    }

    if (!ecsObject) {
        return { messageError: 'ERROR_MESSAGE' };
    }

    return ecsObject;
};


export const agregarMiembroEcsCronogramaService = async (_id, fase_id, ecs_id, rol_id, equipoMiembro_id) => {
    
    const miembros = { rol_id, equipoProyecto_id:equipoMiembro_id };
    let ecsObject=null
    try{
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id ,"cronogramaFase.cronogramaEcs.miembros.equipoProyecto_id": equipoMiembro_id},
            {
                $set: {
                    'cronogramaFase.$[f].cronogramaEcs.$[s].miembros.$[m].equipoProyecto_id': equipoMiembro_id,
                    'cronogramaFase.$[f].cronogramaEcs.$[s].miembros.$[m].rol_id': rol_id
                }
            },undefined,
            {
                arrayFilters: [
                    { "f.fase_id": fase_id },
                    { "s.ecs_id": ecs_id },
                    //{ "m.user_id": equipoMiembro_id }
                    { "m.equipoMiembro_id": equipoMiembro_id }
                ],
                new: true
            }
        );
        if(!ecsObject) throw new Error("generate")
    }
    catch(err){
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id },
            {
                $push: {
                    'cronogramaFase.$[f].cronogramaEcs.$[s].miembros': { ...miembros}
                }
            },undefined,
            {
                arrayFilters: [
                    { "f.fase_id": fase_id },
                    { "s.ecs_id": ecs_id },
                ],
                new: true
            }
        );
    }

    if (!ecsObject) {
        return { messageError: 'ERROR_MESSAGE' };
    }

    return ecsObject;
};


export const obtenerMiembroEcsCronogramaService = async (_id, fase_id, ecs_id) => {
    const cronograma= await cronogramaRepository.obtenerCronogramaRepository(
        { _id, "cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id},
        "cronogramaFase.cronogramaEcs.miembros",
        undefined,
        undefined,
        [
            { path: 'rol_id', select: '_id nombre' },
            {
                path: 'equipoProyecto_id',
                populate: { path: 'user_id rolEquipo_id', select: '_id name nombre' } 
            }
        ],
        { "cronogramaFase.cronogramaEcs.miembros": 1 }
    )

    if(!cronograma) return []

    return cronograma.cronogramaFase[0].cronogramaEcs[0].miembros
};


export const verificarMiembroEcsCronogramaService = async (_id, fase_id, ecs_id,equipoMiembro_id) => {
    
    let ecsObject=null

    ecsObject = await cronogramaRepository.editarCronogramaRepository(
        { _id, "cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id ,"cronogramaFase.cronogramaEcs.miembros.equipoProyecto_id": equipoMiembro_id},
    );
    if(!ecsObject) return false
    return true
};

export const agregarTareaEcsCronogramaService = async (_id, fase_id, ecs_id,tarea_id, titulo, descripcion,equipoMiembro_id,fechaFin,fechaInicio) => {

    if(verificarFechas(fechaFin,fechaInicio)){
        return {messageError:'ERROR_MESSAGE'}
    }

    const tareas = { titulo, descripcion,equipoProyecto_id:equipoMiembro_id,fechaFin,fechaInicio};

    const userCheck = await verificarMiembroEcsCronogramaService(_id, fase_id, ecs_id,equipoMiembro_id)
    if(!userCheck){
        return { messageError: 'ERROR_MESSAGE' };
    }

    let ecsObject=null


    try{
        console.log("tarea",_id,fase_id,ecs_id,tarea_id)
        if(!tarea_id){
            throw new Error("generate")
        }
        console.log("dea")
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id ,"cronogramaFase.cronogramaEcs.tareas._id": tarea_id},
            {
                $set: {
                    'cronogramaFase.$[f].cronogramaEcs.$[s].tareas.$[t].titulo': titulo,
                    'cronogramaFase.$[f].cronogramaEcs.$[s].tareas.$[t].descripcion': descripcion,
                    'cronogramaFase.$[f].cronogramaEcs.$[s].tareas.$[t].equipoProyecto_id': equipoProyecto_id,
                    'cronogramaFase.$[f].cronogramaEcs.$[s].tareas.$[t].fechaFin': fechaFin,
                    'cronogramaFase.$[f].cronogramaEcs.$[s].tareas.$[t].fechaInicio': fechaInicio
                }
            },undefined,
            {
                arrayFilters: [
                    { "f.fase_id": fase_id },
                    { "s.ecs_id": ecs_id },
                    { "t._id": tarea_id }
                ],
                new: true
            }
        );
        console.log(ecsObject)
        if(!ecsObject) throw new Error("generate")
    }
    catch(err){
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id },
            {
                $push: {
                    'cronogramaFase.$[f].cronogramaEcs.$[s].tareas': { ...tareas}
                }
            },undefined,
            {
                arrayFilters: [
                    { "f.fase_id": fase_id },
                    { "s.ecs_id": ecs_id },
                ],
                new: true
            }
        );
    }

    if (!ecsObject) {
        return { messageError: 'ERROR_MESSAGE' };
    }

    return ecsObject;
};

export const quitarTareaEcsCronogramaService = async (_id, fase_id, ecs_id, tarea_id) => {

    const ecsObject = await cronogramaRepository.editarCronogramaRepository(
        { _id ,"cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id},
        {
            $pull: {
                "cronogramaFase.$[f].cronogramaEcs.$[s].tareas": { _id:tarea_id }
            }
        },undefined,
        {
            arrayFilters: [
                { "f.fase_id": fase_id },
                { "s.ecs_id": ecs_id }
            ],
            new: true
        }
    );
    if(!ecsObject){
        return {messageError:'ERROR_MESSAGE'}
    }
    return ecsObject
};

export const quitarEcsCronogramaService = async(_id,fase_id,ecs_id)=>{
    const ecsObject = await cronogramaRepository.editarCronogramaRepository(
        { _id ,"cronogramaFase.fase_id": fase_id },
        {
            $pull: {
                "cronogramaFase.$[f].cronogramaEcs": { ecs_id }
            }
        },undefined,
        {
            arrayFilters: [
                { "f.fase_id": fase_id }
            ],
            new: true
        }
    );
    if(!ecsObject){
        return {messageError:'ERROR_MESSAGE'}
    }
    return ecsObject
}

export const quitarMiembroEcsCronogramaService = async(_id,fase_id,ecs_id,miembro_id)=>{
    const ecsObject = await cronogramaRepository.editarCronogramaRepository(
        { _id ,"cronogramaFase.fase_id": fase_id ,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id},
        {
            $pull: {
                "cronogramaFase.$[f].cronogramaEcs.$[s].miembros": { _id:miembro_id }
            }
        },undefined,
        {
            arrayFilters: [
                { "f.fase_id": fase_id },
                { "s.ecs_id": ecs_id }
            ],
            new: true
        }
    );
    if(!ecsObject){
        return {messageError:'ERROR_MESSAGE'}
    }
    return ecsObject
}

export const quitarRequerimientoEcsCronogramaService = async(_id,fase_id,ecs_id,requerimientos_id)=>{
    console.log(_id,fase_id,ecs_id,requerimientos_id)
    const ecsObject = await cronogramaRepository.editarCronogramaRepository(
        { _id ,"cronogramaFase.fase_id": fase_id,"cronogramaFase.cronogramaEcs.ecs_id": ecs_id},
        {
            $pull: {
                "cronogramaFase.$[f].cronogramaEcs.$[s].requerimientos": { _id:requerimientos_id }
            }
        },undefined,
        {
            arrayFilters: [
                { "f.fase_id": fase_id },
                { "s.ecs_id": ecs_id }
            ],
            new: true
        }
    );
    if(!ecsObject){
        return {messageError:'ERROR_MESSAGE'}
    }
    return ecsObject
}



export const obtenerCronogramaService = async (proyecto_id) => {
    /*
    "cronogramaFase.cronogramaEcs.miembros",

    */

    let queryCustom=cronogramaRepository.model.findOne({ proyecto_id })

    queryCustom = queryCustom.populate('proyecto_id') 
    queryCustom = queryCustom.populate('metodologia_id') 
    queryCustom = queryCustom.populate({path:'cronogramaFase',populate:[
        {path:"fase_id",select:'_id nombre'},
        {
   
                    path: 'cronogramaEcs',
                    populate: [
                        {path:"ecs_id",select:'_id nombre'},
                        {
                            path: 'miembros',
                            populate: [
                                { path: 'rol_id', select: '_id nombre' },
                                {
                                    path: 'equipoProyecto_id',
                                    populate: [
                                        { path: 'user_id', select: '_id name' },
                                        { path: 'rolEquipo_id', select: '_id nombre' }
                                    ]
                                }
                            ]
                        },
                        {
                            path: 'requerimientos',
                            populate: [
                                { path: 'requerimiento_id', select: '_id nombre' },
                                { path: 'user_id', select: '_id name' }
                            ]
                        },
                        {
                            path: 'tareas',
                            populate: [
                                {
                                    path: 'equipoProyecto_id',
                                    populate: [
                                        { path: 'user_id', select: '_id name' }
                                    ]
                                }
                            ]
                        }
                    ]
        }
       
    ]}) 
    return await queryCustom
};

/*
export const obtenerTarearCronogramaService = async (proyecto_id,equipoProyecto_id) => {


    console.log(proyecto_id,equipoProyecto_id)
    let queryCustom=cronogramaRepository.model.findOne({ proyecto_id:new mongoose.Types.ObjectId(proyecto_id) ,"cronogramaFase.cronogramaEcs.miembros.equipoProyecto_id":new mongoose.Types.ObjectId(equipoProyecto_id) })

    
    queryCustom = queryCustom.populate({
        path: 'cronogramaFase',
        populate: {
            path: 'cronogramaEcs',
            populate: {
                path: 'miembros',
                select: 'equipoProyecto_id',
                match: { equipoProyecto_id }
            }
        }
    });
    
    queryCustom=await queryCustom

    console.log(queryCustom.cronogramaFase[0])

    return queryCustom.cronogramaFase[0]
};


*/

export const obtenerTarearCronogramaService = async (proyecto_id, equipoProyecto_id) => {

    const proyectoObjectId = new mongoose.Types.ObjectId(proyecto_id);
    const equipoProyectoObjectId = new mongoose.Types.ObjectId(equipoProyecto_id);

    const pipeline = [
        {
            $match: { proyecto_id: proyectoObjectId }
        },
        {
            $unwind: "$cronogramaFase"
        },
        {
            $lookup: {
                from: "fases", // Nombre de la colección de fases
                localField: "cronogramaFase.fase_id",
                foreignField: "_id",
                as: "cronogramaFase.faseDetalles"
            }
        },
        {
            $unwind: "$cronogramaFase.faseDetalles"
        },
        {
            $unwind: "$cronogramaFase.cronogramaEcs"
        },
        {
            $unwind: "$cronogramaFase.cronogramaEcs.tareas"
        },
        {
            $match: { "cronogramaFase.cronogramaEcs.tareas.equipoProyecto_id": equipoProyectoObjectId }
        },
        {
            $group: {
                _id: {
                    id: "$_id",
                    fase_id: "$cronogramaFase.fase_id",
                    ecs_id: "$cronogramaFase.cronogramaEcs.ecs_id"
                },
                proyecto_id: { $first: "$proyecto_id" },
                progresoInicio: { $first: "$cronogramaFase.progresoInicio" },
                progresoFin: { $first: "$cronogramaFase.progresoFin" },
                fechaFin: { $first: "$cronogramaFase.fechaFin" },
                fechaInicio: { $first: "$cronogramaFase.fechaInicio" },
                faseDetalles: { $first: "$cronogramaFase.faseDetalles" },
                ecs_progresoInicio: { $first: "$cronogramaFase.cronogramaEcs.progresoInicio" },
                ecs_progresoFin: { $first: "$cronogramaFase.cronogramaEcs.progresoFin" },
                ecs_miembros: { $first: "$cronogramaFase.cronogramaEcs.miembros" },
                ecs_requerimientos: { $first: "$cronogramaFase.cronogramaEcs.requerimientos" },
                tareas: { $push: "$cronogramaFase.cronogramaEcs.tareas" }
            }
        },
        {
            $group: {
                _id: "$_id.id",
                proyecto_id: { $first: "$proyecto_id" },
                cronogramaFase: {
                    $push: {
                        fase_id: "$_id.fase_id",
                        progresoInicio: "$progresoInicio",
                        progresoFin: "$progresoFin",
                        fechaFin: "$fechaFin",
                        fechaInicio: "$fechaInicio",
                        faseDetalles: "$faseDetalles",
                        cronogramaEcs: {
                            ecs_id: "$_id.ecs_id",
                            progresoInicio: "$ecs_progresoInicio",
                            progresoFin: "$ecs_progresoFin",
                            miembros: "$ecs_miembros",
                            requerimientos: "$ecs_requerimientos",
                            tareas: "$tareas"
                        }
                    }
                }
            }
        }
    ];

    const result = await cronogramaRepository.model.aggregate(pipeline).exec();
    
    if (!result || result.length === 0) {
        return null;
    }

    return result[0].cronogramaFase;
};
export const obtenerTareaCronogramaService = async (proyecto_id, tarea_id) => {

    const proyectoObjectId = new mongoose.Types.ObjectId(proyecto_id);
    const tareaObjectId = new mongoose.Types.ObjectId(tarea_id);

    const pipeline = [
        {
            $match: { proyecto_id: proyectoObjectId }
        },
        {
            $unwind: "$cronogramaFase"
        },
        {
            $unwind: "$cronogramaFase.cronogramaEcs"
        },
        {
            $match: { "cronogramaFase.cronogramaEcs.tareas._id": tareaObjectId }
        },
        {
            $group: {
                _id: "$_id",
                cronogramaFase: { 
                    $push: {
                        fase_id: "$cronogramaFase.fase_id",
                        progresoInicio: "$cronogramaFase.progresoInicio",
                        progresoFin: "$cronogramaFase.progresoFin",
                        fechaFin: "$cronogramaFase.fechaFin",
                        fechaInicio: "$cronogramaFase.fechaInicio",
                        cronogramaEcs: {
                            ecs_id: "$cronogramaFase.cronogramaEcs.ecs_id",
                            progresoInicio: "$cronogramaFase.cronogramaEcs.progresoInicio",
                            progresoFin: "$cronogramaFase.cronogramaEcs.progresoFin",
                            requerimientos: {
                                $first: {
                                    $ifNull: ["$cronogramaFase.cronogramaEcs.requerimientos", []]
                                }
                            },
                            tareas: {
                                $filter: {
                                    input: "$cronogramaFase.cronogramaEcs.tareas",
                                    as: "tarea",
                                    cond: { $eq: ["$$tarea._id", tareaObjectId] }
                                }
                            }
                        }
                    }
                }
            }
        }
    ];

    const result = await cronogramaRepository.model.aggregate(pipeline)
    return result[0].cronogramaFase[0].cronogramaEcs.tareas[0];
};
export const editarCronogramaService = async(_id,estado_id,nombre,descripcion,fechaFin)=>{
    return await cronogramaRepository.editarCronogramaRepository({_id},{estado_id,nombre,descripcion,fechaFin})
}
