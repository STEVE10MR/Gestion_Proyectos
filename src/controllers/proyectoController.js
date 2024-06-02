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
    const {estado_id,metodologia_id,nombre,descripcion,fechaInicio,fechaFin} = req.body

    if (requireField(estado_id,metodologia_id,nombre,descripcion,fechaFin)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
      }

    const data=await proyectoService.registrarProyectoService(estado_id,metodologia_id,nombre,descripcion,fechaInicio,fechaFin)

    resSend(res,{statusCode:201,status:"success",data})
})

export const editarProyecto = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id
    const {estado_id,nombre,descripcion,fechaFin} = req.body

    if (requireField(_id,nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await proyectoService.editarProyectoService(_id,estado_id,nombre,descripcion,fechaFin)

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