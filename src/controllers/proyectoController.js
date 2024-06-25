import * as proyectoService from '../services/proyectoService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const listarProyecto = catchAsync(async(req,res,next)=>{
    let filter = {...req.body}
    const data=await proyectoService.listarProyectoService(filter,req.query)

    resSend(res,{statusCode:201,status:"success",data})
})

export const registrarProyecto = catchAsync(async(req,res,next)=>{
    const {metodologia_id,nombre,descripcion,fechaInicio,fechaFin} = req.body

    if (requireField(metodologia_id,nombre,descripcion,fechaFin)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
      }

    const data=await proyectoService.registrarProyectoService(metodologia_id,nombre,descripcion,fechaInicio,fechaFin)

    resSend(res,{statusCode:201,status:"success",data})
})

export const editarProyecto = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id
    const {nombre,descripcion,fechaFin} = req.body

    if (requireField(_id,nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await proyectoService.editarProyectoService(_id,nombre,descripcion,fechaFin)

    resSend(res,{statusCode:201,status:"success",data})
})

export const obtenerProyecto = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id

    if (requireField(_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await proyectoService.obtenerProyectoService(_id)

    resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarProyecto = catchAsync(async(req,res,next)=>{
    
    const {id:delete_id} = req.params

    if (requireField(delete_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await proyectoService.eliminarProyectoService(delete_id)

    resSend(res,{statusCode:201,status:"success",data})
})
export const activarProyecto = catchAsync(async(req,res,next)=>{
    
    const {id:activate_id} = req.params

    if (requireField(activate_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await proyectoService.activarProyectoService(activate_id)

    resSend(res,{statusCode:201,status:"success",data})
})