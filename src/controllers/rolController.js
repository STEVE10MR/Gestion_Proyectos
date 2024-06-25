import * as rolService from '../services/rolService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const listarRol = catchAsync(async(req,res,next)=>{
    let filter = {...req.body}

    const data=await rolService.listarRolService(filter,req.query)

    resSend(res,{statusCode:201,status:"success",data})
})

export const registrarRol = catchAsync(async(req,res,next)=>{
    const {nombre} = req.body

    if (requireField(nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
      }

    const data=await rolService.registrarRolService(nombre)

    resSend(res,{statusCode:201,status:"success",data})
})

export const editarRol = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id
    const {nombre} = req.body

    if (requireField(_id,nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await rolService.editarRolService(_id,nombre)

    resSend(res,{statusCode:201,status:"success",data})
})
export const eliminarRol = catchAsync(async(req,res,next)=>{
    
    const {id:delete_id} = req.params

    if (requireField(delete_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await rolService.eliminarRolService(delete_id)

    resSend(res,{statusCode:201,status:"success",data})
})
export const activarRol = catchAsync(async(req,res,next)=>{
    
    const {id:activate_id} = req.params

    if (requireField(activate_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await rolService.activarRolService(activate_id)

    resSend(res,{statusCode:201,status:"success",data})
})