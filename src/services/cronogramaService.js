import * as cronogramaRepository from "../repositories/cronogramaRepository.js"


export const agregarFaseCronogramaService = async(_id,fase_id,fechaFin,fechaInicio)=>{

    const fechaFinObj = new Date(fechaFin);
    const fechaInicioObj = new Date(fechaInicio);


    if (isNaN(fechaFinObj) || isNaN(fechaInicioObj)) {
        return {messageError:'ERROR_MESSAGE'}
    }
    const fechaFinMili = new Date(fechaFinObj).getTime()
    const fechaInicioMili = new Date(fechaInicioObj).getTime()+(7 * 24 * 60 * 60 * 1000)

    if(fechaInicioMili>=fechaFinMili){
        return {messageError:'ERROR_MESSAGE'}
    }

    let ecsObject = null
    try{
        ecsObject=await cronogramaRepository.editarCronogramaRepository({_id,"cronogramaFase.fase_id":fase_id},{
            $set:{
                'cronogramaFase.$.fase_id':fase_id,
                'cronogramaFase.$.fechaFin':fechaFinObj,
                'cronogramaFase.$.fechaInicio':fechaInicioObj
        }}) 
        if(!ecsObject) throw new Error("generate")
    }
    catch(err){
        ecsObject=await cronogramaRepository.editarCronogramaRepository({_id},{$push:{'cronogramaFase':{fase_id,fechaFin:fechaFinObj,fechaInicio:fechaInicioObj}}})
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
/*
export const agregarEcsCronogramaService = async (_id, fase_id, ecs_id, rol_id, project_manager_id, user_id_jefep, requerimiento_id) => {
    let ecsObject = null;
    const miembros = { rol_id, user_id: project_manager_id };
    const requerimientos = { user_id: user_id_jefep, requerimiento_id };
    if(!miembros || !requerimientos) return { messageError: 'ERROR_MESSAGE' };
    try {
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id, "cronogramaFase.cronogramaEcs.ecs_id": ecs_id },
            {
                $set: {
                    'cronogramaFase.$[f].cronogramaEcs.$[e].miembros': miembros,
                    'cronogramaFase.$[f].cronogramaEcs.$[e].requerimientos': requerimientos,
                }
            },undefined,
            {
                arrayFilters: [
                    { "f.fase_id": fase_id },
                    { "e.ecs_id": ecs_id }
                ],
                new: true
            }
        );
        if(!ecsObject) throw new Error("generate")
    } catch (err) {
        ecsObject = await cronogramaRepository.editarCronogramaRepository(
            { _id, "cronogramaFase.fase_id": fase_id },
            {
                $push: {
                    'cronogramaFase.$.cronogramaEcs': { ecs_id}
                }
            }
        );

    }
    if (!ecsObject) {
        return { messageError: 'ERROR_MESSAGE' };
    }

    return ecsObject;
};
*/


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
                    { "m.user_id": equipoMiembro_id }
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



export const obtenerCronogramaService = async(proyecto_id)=>{
    return await cronogramaRepository.obtenerCronogramaRepository({proyecto_id},'proyecto_id metodologia_id cronogramaFase.fase_id cronogramaFase.cronogramaEcs.ecs_id cronogramaFase.cronogramaEcs.miembros.rol_id cronogramaFase.cronogramaEcs.miembros.equipoProyecto_id cronogramaFase.cronogramaEcs.requerimientos.requerimiento_id cronogramaFase.cronogramaEcs.requerimientos.user_id')
}
export const editarCronogramaService = async(_id,estado_id,nombre,descripcion,fechaFin)=>{
    return await cronogramaRepository.editarCronogramaRepository({_id},{estado_id,nombre,descripcion,fechaFin})
}
