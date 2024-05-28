import * as estadoRepository from "../repositories/estadoRepository.js"

export const listarEstadoService = async(body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await estadoRepository.listaEstadoRepository(filter,query,popOptions)
} 
export const registrarEstadoService = async(nombre)=>{
    return await estadoRepository.crearEstadoRepository({nombre})
} 
export const editarEstadoService = async(_id,nombre)=>{
    return await estadoRepository.editarEstadoRepository({_id},{nombre})
} 
export const eliminarEstadoService = async(_id)=>{
    return await estadoRepository.eliminarEstadoRepository(_id)
} 