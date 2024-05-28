
import * as ecsRepository from "../repositories/ecsRepository.js"


export const crearEcsService =async(proyecto_id,estado_id,fase_id,nombre,descripcion,tipoEcs,tipoTecnologia,version,fechaFin)=>{

    const ecsObject = await ecsRepository.crearEcsRepository({proyecto_id,estado_id,fase_id,nombre,descripcion,tipoEcs,tipoTecnologia,versiones:{version,fechaFin}})
    return ecsObject
}
export const editarEcsService =async(_id,user_id,estado_id,fase_id,nombre,descripcion,tipoEcs,tipoTecnologia)=>{
    let ecsObject = await ecsRepository.obtenerOneEcsRepository({_id})

    ecsObject.fase_id = fase_id
    ecsObject.estado_id = estado_id
    ecsObject.nombre = nombre
    ecsObject.descripcion = descripcion
    ecsObject.tipoEcs = tipoEcs
    ecsObject.tipoTecnologia = tipoTecnologia
    ecsObject.user_id = user_id

    const ecsUpdate = await ecsRepository.editarOneEcsRepository(ecsObject)


    if (!ecsUpdate) {
        return {messageError:'ERROR_MESSAGE'}
    }
    return ecsUpdate
}
export const listarEcsService =async(body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    
    const ecs=await ecsRepository.listaEcsRepository(filter,query,popOptions)
  
    return ecs
}

export const obtenerEcsService =async(_id,popOptions)=>{

    return await ecsRepository.obtenerEcsRepository(_id,popOptions)

}


export const listarHistorialCambiosService =async(_id)=>{

    const ecsObject=await ecsRepository.obtenerEcsRepository(_id)

    if(!ecsObject){
        return []
    }

    return ecsObject.historialCambios
}

export const listarComponentesService =async(_id)=>{

    const ecsObject=await ecsRepository.obtenerEcsRepository(_id,'ecs')

    if(!ecsObject){
        return []
    }

    return ecsObject.componentes
}

export const agregarComponenteService =async(_id,ecs_id)=>{
    try{
        const ecsObject=await ecsRepository.editarEcsRepository({_id,"componentes.ecs_id":ecs_id},{$set:{'componentes.$.ecs_id':ecs_id}})

        return ecsObject
    }
    catch(err){
        const ecsObject=await ecsRepository.editarEcsRepository({_id},{$push:{'componentes':{ecs_id}}})

        return ecsObject
    }
}

export const agregarVersionService =async(_id,version,fechaFin)=>{

    const ecsListObject=await ecsRepository.obtenerEcsRepository(_id)

    if(!ecsListObject){
        return []
    }

    const verificarVersion = ecsListObject.versiones.some(element => element.active)

    if(verificarVersion){
        return {messageError:'ERROR_MESSAGE'}
    }

    const ecsObject=await ecsRepository.editarEcsRepository({_id},{$push:{'versiones':{version,fechaFin}}})
    return ecsObject
}


export const editarVersionService =async(_id,estado,fechaFin)=>{

    const ecsListObject=await ecsRepository.obtenerEcsRepository(_id)

    if(!ecsListObject){
        return []
    }

    const verificarVersion = ecsListObject.versiones.some(element => element.active)

    if(!verificarVersion){
        return {messageError:'ERROR_MESSAGE'}
    }
    const ecsObject=await ecsRepository.editarEcsRepository({_id,"versiones.active":true},{$set:{'versiones.$.active':estado,'versiones.$.fechaFin':fechaFin}})

    return ecsObject
}

export const listarVersionService =async(_id)=>{
   
    const ecsObject=await ecsRepository.obtenerEcsRepository(_id)

    console.log(ecsObject)

    if(!ecsObject){
        return []
    }

    return ecsObject.versiones
}


export const eliminarComponenteService =async(_id,componente_id)=>{
    console.log(_id,componente_id)
    const ecsObject=await ecsRepository.editarEcsRepository({_id},{$pull:{'componentes':{_id:componente_id}}})
    return ecsObject
}

export const listarTiposEcs = ()=>["Software", "Hardware", "Documentación", "Proceso", "Otro"]
export const listarTiposTecnogologia = ()=>["Frontend", "Backend", "Base de Datos", "DevOps", "QA"]