import * as proyectoRepository from "../repositories/proyectoRepository.js"


export const listarProyectoService  = async (body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await proyectoRepository.listaProyectoRepository(filter,query,popOptions)
}
export const registrarProyectoService = async(estado_id,nombre,descripcion,fechaFin)=>{
    return await proyectoRepository.crearProyectoRepository({estado_id,nombre,descripcion,fechaFin})
}
export const obtenerProyectoService = async(_id)=>{
    return await proyectoRepository.obtenerProyectoRepository({_id})
}
export const editarProyectoService = async(_id,estado_id,nombre,descripcion,fechaFin)=>{
    return await proyectoRepository.editarProyectoRepository({_id},{estado_id,nombre,descripcion,fechaFin})
}
