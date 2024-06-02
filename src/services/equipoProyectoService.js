import * as equipoProyectoRepository from "../repositories/equipoProyectoRepository.js"
import * as userService from "../services/userService.js"

export const crearEquipoProyectoService =async(proyecto_id,rolEquipo_id,email,firtName,lastName)=>{
    const userObject = await userService.crearUserService(email,firtName,lastName)
    const equipoProyecto = await equipoProyectoRepository.crearEquipoProyectoRepository({user_id:userObject.user._id,proyecto_id,rolEquipo_id})
    userObject.equipoProyecto = equipoProyecto
    return userObject
}
export const agregarEquipoProyectoService =async(proyecto_id,user_id)=>{

    const userObject = await userService.obtenerUserService(user_id)

    if(!userObject){
        return {messageError:'ERROR_MESSAGE'} 
    }

    const EquipoProyecto = await equipoProyectoRepository.crearEquipoProyectoRepository({user_id:userObject._id,proyecto_id,rolEquipo_id:'6658bddb9fc818144416fc45'})

    return {user:userObject,EquipoProyecto}
}

export const eliminarEquipoProyectoService =async(_id)=>{

    return await equipoProyectoRepository.eliminarEquipoProyectoRepository(_id)
}
export const listarEquipoProyectoService = async (body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {...body}
    return await equipoProyectoRepository.listaEquipoProyectoRepository(filter,query,popOptions) 
}
export const listarEquipoJefeDeProyectoService = async (body,query,popOptions)=>{
    let filter= undefined
    if(body) filter = {rolEquipo_id:'6658bddb9fc818144416fc45'}
    
    return await equipoProyectoRepository.listaEquipoProyectoRepository(filter,query,popOptions) 
}

export const obtenerEquipoProyectoService = async(_id)=>{
    return await equipoProyectoRepository.obtenerEquipoProyectoRepository({_id})
}

export const editarEquipoProyectoService = async(_id,proyecto_id,rolEquipo_id)=>{
    const user=await equipoProyectoRepository.editarEquipoProyectoRepository({_id},{proyecto_id,rolEquipo_id})
    return user
}
  