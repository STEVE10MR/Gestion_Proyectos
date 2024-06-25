import * as estadoProblemasRepository from "../repositories/estadoProblemasRepository.js"
import * as handleFactory from "../services/handleFactory.js"
export const listarEstadoProblemaService = async(body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await estadoProblemasRepository.listaEstadoProblemaRepository(filter,query,popOptions)
} 
export const registrarEstadoProblemaService = async(nombre)=>{
    return await estadoProblemasRepository.crearEstadoProblemaRepository({nombre})
} 
export const editarEstadoProblemaService = async(_id,nombre)=>{
    return await estadoProblemasRepository.editarEstadoProblemaRepository({_id},{nombre})
} 
export const eliminarEstadoproblemasService = handleFactory.deleteOne(estadoProblemasRepository)
export const activarEstadoproblemasService = handleFactory.activateOne(estadoProblemasRepository)