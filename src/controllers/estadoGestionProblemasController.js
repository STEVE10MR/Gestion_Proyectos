import * as estadoProblemasService from '../services/estadoGestionProblemasService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const listarEstadoProblema = catchAsync(async(req,res,next)=>{
    let filter = {...req.body}

    const data=await estadoProblemasService.listarEstadoGestionProblemas(filter,req.query)

    resSend(res,{statusCode:201,status:"success",data})
})

export const registrarEstadoProblema = catchAsync(async(req,res,next)=>{
    const {nombre} = req.body

    if (requireField(nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
      }

    const data=await estadoProblemasService.registrarEstadoGestionProblemas(nombre)

    resSend(res,{statusCode:201,status:"success",data})
})

export const editarEstadoProblema = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id
    const {nombre} = req.body

    if (requireField(_id,nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await estadoProblemasService.editarEstadoGestionProblemas(_id,nombre)

    resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarEstadoProblema = catchAsync(async(req,res,next)=>{
    
    const {id:delete_id} = req.params

    if (requireField(delete_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await estadoProblemasService.eliminarEstadoGestionProblemas(delete_id)

    resSend(res,{statusCode:201,status:"success",data})
})
export const activarEstadoProblema = catchAsync(async(req,res,next)=>{
    
    const {id:activate_id} = req.params

    if (requireField(activate_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await estadoProblemasService.activarEstadoGestionProblemas(activate_id)

    resSend(res,{statusCode:201,status:"success",data})
})