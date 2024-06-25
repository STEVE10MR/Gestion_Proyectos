import * as faseRepository from "../repositories/faseRepository.js"
import * as handleFactory from "../services/handleFactory.js"

export const listarFaseService  = async (body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}

    return await faseRepository.listaFaseRepository(filter,query,popOptions)
}
export const listarFasesFaseService  = async (_id)=>{
    return await faseRepository.obtenerFase(_id)
}
export const registrarFaseService = async(metodologia_id,nombre,descripcion)=>{
    return await faseRepository.crearFaseRepository({metodologia_id,nombre,descripcion})
}
export const editarFaseService = async(_id,nombre,descripcion)=>{
    return await faseRepository.editarFaseRepository({_id},{nombre,descripcion})
}
export const obtenerFaseService = async(_id)=>{
    return await faseRepository.obtenerFaseRepository(_id)
}
export const eliminarFaseService = handleFactory.deleteOne(faseRepository)
export const activarFaseService = handleFactory.activateOne(faseRepository)
