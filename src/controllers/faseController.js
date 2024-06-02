import * as faseService from '../services/faseService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import sendEmail from '../utils/sendEmail.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';
import resetUrl from '../utils/resetUrl.js';


export const registrarFase= catchAsync(async (req,res,next)=>{
  const {id:metodologia_id} = req.params
  const {nombre,descripcion} = req.body
  if(requireField(metodologia_id,nombre,descripcion)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  } 
  const data=await faseService.registrarFaseService(metodologia_id,nombre,descripcion)
  resSend(res,{statusCode:201,status:"success",data})

})

export const editarFase= catchAsync(async (req,res,next)=>{

  const {id} = req.params
  const {nombre,descripcion} = req.body

  if(requireField(id,nombre,descripcion)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  } 
  const data=await faseService.editarFaseService(id,nombre,descripcion)
  resSend(res,{statusCode:201,status:"success",data})

})


export const obtenerFase= catchAsync(async (req,res,next)=>{

    const {id} = req.params
    if(requireField(id)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    } 
    const data=await faseService.obtenerFaseService(id)
    resSend(res,{statusCode:201,status:"success",data})
  
})

export const eliminarFase= catchAsync(async (req,res,next)=>{

    const {id} = req.params
    if(requireField(id)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    } 
    const data=await faseService.eliminarFaseService(id)
    resSend(res,{statusCode:201,status:"success",data})
  
})

export const listarFases = catchAsync(async (req,res,next)=>{
    const id = req.params.id
    let filter = {metodologia_id:id,...req.body}
  
    const data=await faseService.listarFaseService(filter,req.query)
    resSend(res,{statusCode:201,status:"success",data})
    
})