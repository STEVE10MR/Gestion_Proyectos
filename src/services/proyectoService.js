import * as proyectoRepository from "../repositories/proyectoRepository.js"
import * as handleFactory from "../services/handleFactory.js"

export const listarProyectoService  = async (body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await proyectoRepository.listaProyectoRepository(filter,query,'metodologia_id')
}
export const registrarProyectoService = async(metodologia_id,nombre,descripcion,fechaInicio,fechaFin)=>{
    return await proyectoRepository.crearProyectoRepository({metodologia_id,nombre,descripcion,fechaInicio,fechaFin})
}
export const obtenerProyectoService = async(_id)=>{
    return await proyectoRepository.obtenerProyectoRepository({_id})
}
export const editarProyectoService = async(_id,nombre,descripcion,fechaFin)=>{
    return await proyectoRepository.editarProyectoRepository({_id},{nombre,descripcion,fechaFin})
}
export const eliminarProyectoService = handleFactory.deleteOne(proyectoRepository)
export const activarProyectoService = handleFactory.activateOne(proyectoRepository)