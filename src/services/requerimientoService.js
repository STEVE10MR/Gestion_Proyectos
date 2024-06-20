import * as requerimientoRepository from "../repositories/requerimientoRepository.js"

export const listarRequerimientoService  = async (body,query)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await requerimientoRepository.listaRequermientoRepository(filter,query,"requerimientoModulo_id estado_id")
}
export const registrarRequerimientoService = async(proyecto_id,requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin)=>{
    return await requerimientoRepository.crearRequermientoRepository({requerimientoModulo_id,proyecto_id,estado_id,nombre,descripcion,fechaFin})
}
export const obtenerRequerimientoService = async(_id)=>{
    return await requerimientoRepository.obtenerRequermientoRepository({_id})
}
export const editarRequerimientoService = async(_id,proyecto_id,requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin)=>{
    return await requerimientoRepository.editarRequermientoRepository({_id,proyecto_id},{requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin})
}
export const eliminarRequerimientoRepository = async(_id)=>{
    return await requerimientoRepository.eliminarRequerimientoRepository(_id)
}
