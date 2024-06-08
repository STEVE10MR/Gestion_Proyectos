import * as cronogramaRepository from "../repositories/cronogramaRepository.js"


export const agregarFaseCronogramaService = async(_id,fase_id)=>{
    try{
        const ecsObject=await cronogramaRepository.editarCronogramaRepository({_id,"cronogramaFase.fase_id":fase_id},{$set:{'cronogramaFase.$.fase_id':fase_id}})

        return ecsObject
    }
    catch(err){
        const ecsObject=await cronogramaRepository.editarCronogramaRepository({_id},{$push:{'cronogramaFase':{fase_id}}})

        return ecsObject
    }
}
export const obtenerCronogramaService = async(proyecto_id)=>{
    return await cronogramaRepository.obtenerCronogramaRepository({proyecto_id},'cronogramaFase.fase_id')
}
export const editarCronogramaService = async(_id,estado_id,nombre,descripcion,fechaFin)=>{
    return await cronogramaRepository.editarCronogramaRepository({_id},{estado_id,nombre,descripcion,fechaFin})
}
