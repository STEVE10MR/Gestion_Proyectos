import * as estadoService from '../services/estadoService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const listarEstado = catchAsync(async(req,res,next)=>{
    let filter = {...req.body}

    const data=await estadoService.listarEstadoService(filter,req.query)

    resSend(res,{statusCode:201,status:"success",data})
})

export const registrarEstado = catchAsync(async(req,res,next)=>{
    const {nombre} = req.body

    if (requireField(nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
      }

    const data=await estadoService.registrarEstadoService(nombre)

    resSend(res,{statusCode:201,status:"success",data})
})

export const editarEstado = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id
    const {nombre} = req.body

    if (requireField(_id,nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await estadoService.editarEstadoService(_id,nombre)

    resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarEstado = catchAsync(async(req,res,next)=>{
    
    const {id:delete_id} = req.params

    if (requireField(delete_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await estadoService.eliminarEstadoService(delete_id)

    resSend(res,{statusCode:201,status:"success",data})
})
export const activarEstado = catchAsync(async(req,res,next)=>{
    
    const {id:activate_id} = req.params

    if (requireField(activate_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await estadoService.activarEstadoService(activate_id)

    resSend(res,{statusCode:201,status:"success",data})
})