import * as requerimientoRepository from "../repositories/requerimientoRepository.js"
import * as handleFactory from "../services/handleFactory.js"
export const listarRequerimientoService  = async (body,query)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await requerimientoRepository.listaRequermientoRepository(filter,query,"requerimientoModulo_id")
}
export const registrarRequerimientoService = async(proyecto_id,requerimientoModulo_id,nombre,descripcion)=>{
    return await requerimientoRepository.crearRequermientoRepository({requerimientoModulo_id,proyecto_id,nombre,descripcion})
}
export const obtenerRequerimientoService = async(_id)=>{
    return await requerimientoRepository.obtenerRequermientoRepository({_id})
}
export const editarRequerimientoService = async(_id,proyecto_id,requerimientoModulo_id,nombre,descripcion)=>{
    return await requerimientoRepository.editarRequermientoRepository({_id,proyecto_id},{requerimientoModulo_id,nombre,descripcion})
}
export const eliminarRequerimientoService = handleFactory.deleteOne(requerimientoRepository)
export const activarRequerimientoService = handleFactory.activateOne(requerimientoRepository)