import * as miembroCambioRepository from "../repositories/miembroCambioRepository.js"
import * as userService from "../services/userService.js"

export const crearMiembroCambioService =async(proyecto_id,email,firtName,lastName)=>{
    const userObject = await userService.crearUserService(email,firtName,lastName)
    const miembroCambio = await miembroCambioRepository.crearMiembroCambioRepository({user_id:userObject.user._id,proyecto_id})
    userObject.miembroCambio = miembroCambio

    return userObject
}
export const agregarMiembroCambioService =async(proyecto_id,user_id)=>{

    const userObject = await userService.obtenerUserService(user_id)

    if(!userObject){
        return {messageError:'ERROR_MESSAGE'} 
    }

    const miembroCambio = await miembroCambioRepository.crearMiembroCambioRepository({user_id:userObject._id,proyecto_id})

    return {user:userObject,miembroCambio}
}

export const eliminarMiembroCambioService =async(_id)=>{

    return await miembroCambioRepository.eliminarMiembroCambioRepository(_id)
}
export const listarMiembroCambioService = async (body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    
    return await miembroCambioRepository.listaMiembroCambioRepository(filter,query,popOptions)
}
export const obtenerMiembroCambioService = async(_id)=>{
    return await miembroCambioRepository.obtenerMiembroCambioRepository({_id})
}

export const editarMiembroCambioService = async(_id,user_id)=>{
    const user=await miembroCambioRepository.editarMiembroCambioRepository({_id},{user_id})
    return user
}
  