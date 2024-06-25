import * as moduloRequerimientoService from '../services/moduloRequerimientoService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const listarModuloRequerimiento = catchAsync(async(req,res,next)=>{
    let filter = {...req.body}

    const data=await moduloRequerimientoService.listarModuloRequerimientoService(filter,req.query)

    resSend(res,{statusCode:201,status:"success",data})
})

export const obtenerModuloRequerimiento = catchAsync(async(req,res,next)=>{
    const _id = req.params.id

    if (requireField(_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }
    const data=await moduloRequerimientoService.obtenerModuloRequerimientoService(_id)

    resSend(res,{statusCode:201,status:"success",data})
})


export const registrarModuloRequerimiento = catchAsync(async(req,res,next)=>{
    const {nombre,descripcion} = req.body

    if (requireField(nombre,descripcion)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
      }

    const data=await moduloRequerimientoService.registrarModuloRequerimientoService(nombre,descripcion)

    resSend(res,{statusCode:201,status:"success",data})
})

export const editarModuloRequerimiento = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id
    const {nombre,descripcion} = req.body

    console.log(_id,nombre,descripcion)
    if (requireField(_id,nombre)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }
    
    const data=await moduloRequerimientoService.editarModuloRequerimientoService(_id,nombre,descripcion)

    resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarRequerimientoModulo = catchAsync(async(req,res,next)=>{
    
    const {id:delete_id} = req.params

    if (requireField(delete_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await moduloRequerimientoService.eliminarModuloRequerimientoService(delete_id)

    resSend(res,{statusCode:201,status:"success",data})
})
export const activarRequerimientoModulo = catchAsync(async(req,res,next)=>{
    
    const {id:activate_id} = req.params

    if (requireField(activate_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await moduloRequerimientoService.activarModuloRequerimientoService(activate_id)

    resSend(res,{statusCode:201,status:"success",data})
})