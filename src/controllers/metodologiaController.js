import * as metodologiaService from '../services/metodologiaService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import sendEmail from '../utils/sendEmail.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';
import resetUrl from '../utils/resetUrl.js';


export const registrarMetodologia= catchAsync(async (req,res,next)=>{

  const {nombre,descripcion} = req.body
  console.log(nombre,descripcion)
  if(requireField(nombre,descripcion)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  } 
  const data=await metodologiaService.registrarMetodologiaService(nombre,descripcion)
  resSend(res,{statusCode:201,status:"success",data})

})

export const editarMetodologia= catchAsync(async (req,res,next)=>{

  const {id} = req.params
  const {nombre,descripcion} = req.body
  if(requireField(id,nombre,descripcion)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  } 
  const data=await metodologiaService.editarMetodologiaService(id,nombre,descripcion)
  resSend(res,{statusCode:201,status:"success",data})

})


export const listarMetodologias = catchAsync(async (req,res,next)=>{

    let filter = {...req.body}
  
    const data=await metodologiaService.listarMetodologiaService(filter,req.query)
    resSend(res,{statusCode:201,status:"success",data})
    
})
export const obtenerMetodologia= catchAsync(async (req,res,next)=>{

  const {id} = req.params
  if(requireField(id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  } 
  const data=await metodologiaService.obtenerMetodologiaService(id)
  resSend(res,{statusCode:201,status:"success",data})

})

export const eliminarMetodologia = catchAsync(async(req,res,next)=>{
    
  const {id:delete_id} = req.params

  if (requireField(delete_id)) {
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data=await metodologiaService.eliminarMetodologiaService(delete_id)

  resSend(res,{statusCode:201,status:"success",data})
})
export const activarMetodologia = catchAsync(async(req,res,next)=>{
  
  const {id:activate_id} = req.params

  if (requireField(activate_id)) {
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data=await metodologiaService.activarMetodologiaService(activate_id)

  resSend(res,{statusCode:201,status:"success",data})
})