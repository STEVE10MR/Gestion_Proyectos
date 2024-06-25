import * as moduloRequerimientoFuncionalRepository from "../repositories/moduloRequerimientoRepository.js"
import * as handleFactory from "../services/handleFactory.js"
export const listarModuloRequerimientoService  = async (body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await moduloRequerimientoFuncionalRepository.listaModuloRequerimientoRepository(filter,query,popOptions)
}
export const registrarModuloRequerimientoService = async(nombre,descripcion)=>{
    return await moduloRequerimientoFuncionalRepository.crearModuloRequerimientoRepository({nombre,descripcion})
}
export const obtenerModuloRequerimientoService = async(_id)=>{
    return await moduloRequerimientoFuncionalRepository.obtenerModuloRequerimientoRepository({_id})
}
export const editarModuloRequerimientoService = async(_id,nombre,descripcion)=>{
    return await moduloRequerimientoFuncionalRepository.editarModuloRequerimientoRepository({_id},{nombre,descripcion})
}
export const eliminarModuloRequerimientoService = handleFactory.deleteOne(moduloRequerimientoFuncionalRepository)
export const activarModuloRequerimientoService = handleFactory.activateOne(moduloRequerimientoFuncionalRepository)