import * as rolRepository from "../repositories/rolRepository.js"
import * as handleFactory from "../services/handleFactory.js"
export const listarRolService = async(body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await rolRepository.listaRolRepository(filter,query,popOptions)
} 
export const registrarRolService = async(nombre)=>{
    return await rolRepository.crearRolRepository({nombre})
} 
export const obtenerRolService = async(_id)=>{
    return await rolRepository.obtenerRolRepository(_id)
} 
export const editarRolService = async(_id,nombre)=>{
    return await rolRepository.editarRolRepository({_id},{nombre})
} 
export const eliminarRolService = handleFactory.deleteOne(rolRepository)
export const activarRolService = handleFactory.activateOne(rolRepository)
