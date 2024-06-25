import * as rolEquipoRepository from "../repositories/rolEquipoRepository.js"
import * as handleFactory from "../services/handleFactory.js"
export const listarRolEquipoService = async(body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await rolEquipoRepository.listaRolEquipoRepository(filter,query,popOptions)
} 
export const registrarRolEquipoService = async(nombre)=>{
    return await rolEquipoRepository.crearRolEquipoRepository({nombre})
} 
export const editarRolEquipoService = async(_id,nombre)=>{
    return await rolEquipoRepository.editarRolEquipoRepository({_id},{nombre})
} 
export const eliminarRolEquipoService = handleFactory.deleteOne(rolEquipoRepository)
export const activarRolEquipoService = handleFactory.activateOne(rolEquipoRepository)
