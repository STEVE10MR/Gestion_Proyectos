import * as metodologiaRepository from "../repositories/metodologiaRepository.js"
import * as faseService from "../services/faseService.js"

export const listarMetodologiaService  = async (body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}

    return await metodologiaRepository.listaMetodologiaRepository(filter,query,popOptions)
}
export const listarFasesMetodologiaService  = async (_id)=>{
    return await metodologiaRepository.obtenerMetodologiaRepository(_id,"fase")
}
export const registrarMetodologiaService = async(nombre,descripcion)=>{
    return await metodologiaRepository.crearMetodologiaRepository({nombre,descripcion})
}
export const editarMetodologiaService = async(_id,nombre,descripcion)=>{
    return await metodologiaRepository.editarMetodologiaRepository({_id},{nombre,descripcion})
}
export const obtenerMetodologiaService = async(_id)=>{
    return await metodologiaRepository.obtenerMetodologiaRepository(_id)
}
export const eliminarMetodologiaService = async(_id)=>{
    return await metodologiaRepository.eliminarMetodologiaRepository(_id)
}