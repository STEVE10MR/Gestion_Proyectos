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

export const eliminarModuloRequerimiento = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id

    if (requireField(_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }
    console.log(_id)
    const data=await moduloRequerimientoService.eliminarModuloRequerimientoRepository(_id)

    resSend(res,{statusCode:201,status:"success",data})
})