import * as estadoProblemasService from '../services/estadoProblemasService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const listarEstadoProblema = catchAsync(async(req,res,next)=>{
    let filter = {...req.body}

    const data=await estadoProblemasService.listarEstadoProblemaService(filter,req.query)

    resSend(res,{statusCode:201,status:"success",data})
})

export const registrarEstadoProblema = catchAsync(async(req,res,next)=>{
    const {nombre} = req.body

    if (requireField(nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
      }

    const data=await estadoProblemasService.registrarEstadoProblemaService(nombre)

    resSend(res,{statusCode:201,status:"success",data})
})

export const editarEstadoProblema = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id
    const {nombre} = req.body

    if (requireField(_id,nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await estadoProblemasService.editarEstadoProblemaService(_id,nombre)

    resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarEstadoProblema = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id

    if (requireField(_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await estadoProblemasService.editarEstadoProblemaService(_id)

    resSend(res,{statusCode:201,status:"success",data})
})