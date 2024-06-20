import * as RequerimientoService from '../services/requerimientoService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const listarRequerimiento = catchAsync(async(req,res,next)=>{

    let {id:proyecto_id} = req.params
    let filter = {proyecto_id,...req.body}
    
    const data=await RequerimientoService.listarRequerimientoService(filter,req.query)

    resSend(res,{statusCode:201,status:"success",data})
})

export const registrarRequerimiento = catchAsync(async(req,res,next)=>{
    const proyecto_id = req.proyecto_id
    const {requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin} = req.body

    if (requireField(requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin,proyecto_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
      }

    const data=await RequerimientoService.registrarRequerimientoService(proyecto_id,requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin)

    resSend(res,{statusCode:201,status:"success",data})
})

export const editarRequerimiento = catchAsync(async(req,res,next)=>{

    const proyecto_id = req.proyecto_id

    const requerimiento_id = req.params.id
    const {requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin} = req.body

    console.log(requerimiento_id,requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin,proyecto_id)

    if (requireField(requerimiento_id,requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin,proyecto_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await RequerimientoService.editarRequerimientoService(requerimiento_id,proyecto_id,requerimientoModulo_id,estado_id,nombre,descripcion,fechaFin)

    resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarRequerimiento = catchAsync(async(req,res,next)=>{
    
    const _id = req.params.id

    if (requireField(_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await RequerimientoService.eliminarRequerimientoRepository(_id)

    resSend(res,{statusCode:201,status:"success",data})
})