import * as equipoProyectoRepository from "../repositories/equipoProyectoRepository.js"
import * as handleFactory from "../services/handleFactory.js"
import * as userService from "../services/userService.js"
import mongoose from "mongoose"

export const crearEquipoProyectoService =async(proyecto_id,rolEquipo_id,email,firtName,lastName)=>{
    const userObject = await userService.crearUserService(email,firtName,lastName)
    const equipoProyecto = await equipoProyectoRepository.crearEquipoProyectoRepository({user_id:userObject.user._id,proyecto_id,rolEquipo_id})
    userObject.equipoProyecto = equipoProyecto
    return userObject
}
export const agregarEquipoProyectoService =async(proyecto_id,rolEquipo_id,user_id)=>{

    const userObject = await userService.obtenerUserService(user_id)

    if(!userObject){
        return {messageError:'ERROR_MESSAGE'} 
    }

    const EquipoProyecto = await equipoProyectoRepository.crearEquipoProyectoRepository({user_id:userObject._id,proyecto_id,rolEquipo_id})

    return {EquipoProyecto}
}

export const eliminarEquipoProyectoService = handleFactory.deleteOne(equipoProyectoRepository)
export const activarEquipoProyectoService = handleFactory.activateOne(equipoProyectoRepository)

export const listarEquipoProyectoUserService = async (userId)=>{

    return await equipoProyectoRepository.getModelAggregate.aggregate([
    { $match: { user_id: new mongoose.Types.ObjectId(userId) } },
    {
        $group: {
            _id: "$rolEquipo_id",
        }
    },
    { 
        $project: {
        rolEquipo_id: "$_id",
        _id: 0
        }
    },
    {
        $lookup: {
            from: 'rolequipos',
            localField: 'rolEquipo_id',
            foreignField: '_id',
            as: 'rolEquipo'
        }
    },{
        $unwind:"$rolEquipo"
    },
    {
        $project: {
            id: "$rolEquipo._id",
            nombre: "$rolEquipo.nombre"
        }
    }])
}

/*Quitar de rutas y de la vista*/
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
/**/
export const obtenerEquipoProyectoService = async(_id)=>{
    return await equipoProyectoRepository.obtenerEquipoProyectoRepository({_id})
}

export const editarEquipoProyectoService = async(_id,rolEquipo_id)=>{
    const user=await equipoProyectoRepository.editarEquipoProyectoRepository({_id},{rolEquipo_id})
    return user
}

