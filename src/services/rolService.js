import * as rolRepository from "../repositories/rolRepository.js"

export const listarRolService = async(body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await rolRepository.listaRolRepository(filter,query,popOptions)
} 
export const registrarRolService = async(nombre)=>{
    return await rolRepository.crearRolRepository({nombre})
} 
export const editarRolService = async(_id,nombre)=>{
    return await rolRepository.editarRolRepository({_id},{nombre})
} 
export const eliminarRolService = async()=>{
    //return await rolRepository.eliminarRolService(filter,query,popOptions)
} 