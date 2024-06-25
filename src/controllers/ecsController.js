import * as ecsService from '../services/ecsService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import sendEmail from '../utils/sendEmail.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';
import resetUrl from '../utils/resetUrl.js';


export const crearEcs = catchAsync(async(req,res,next)=>{
    const {id,fase_id} = req.params
    const {nombre,descripcion,tipoEcs,tipoTecnologia,version,fechaFin} = req.body
    console.log(id,fase_id,nombre,descripcion,tipoEcs,tipoTecnologia,version,fechaFin)
    if(requireField(id,fase_id,nombre,descripcion,tipoEcs,tipoTecnologia,version,fechaFin)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    const data=await ecsService.crearEcsService(id,fase_id,nombre,descripcion,tipoEcs,tipoTecnologia,version,fechaFin)
  
    resSend(res,{statusCode:201,status:"success",data})
})

export const obtenerEcs = catchAsync(async(req,res,next)=>{
  const {ecs_id:id} = req.params

  if(requireField(id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }
  const data=await ecsService.obtenerEcsService(id,'estado_id')

  resSend(res,{statusCode:201,status:"success",data})
})

export const editarEcs = catchAsync(async(req,res,next)=>{

    const {fase_id,ecs_id} = req.params
    const {_id:user_id} = req.user

    const {nombre,descripcion,tipoEcs,tipoTecnologia} = req.body

    if(requireField(user_id,ecs_id,fase_id,nombre,descripcion,tipoEcs,tipoTecnologia)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    const data=await ecsService.editarEcsService(ecs_id,user_id,fase_id,nombre,descripcion,tipoEcs,tipoTecnologia)
  
    resSend(res,{statusCode:201,status:"success",data})
})

export const listarEcs = catchAsync(async(req,res,next)=>{
    
    const {fase_id} = req.params
    let filter = {fase_id,...req.body}
    console.log(filter)
    const data=await ecsService.listarEcsService(filter,req.query)
  
    resSend(res,{statusCode:201,status:"success",data})
})


export const listarHistorialCambios = catchAsync(async(req,res,next)=>{
    const {ecs_id:id} = req.params

    if(requireField(id)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    const data=await ecsService.listarHistorialCambiosService(id)
  
    resSend(res,{statusCode:201,status:"success",data})
})

export const listarComponentes = catchAsync(async(req,res,next)=>{
    const {id} = req.params

    if(requireField(id)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    const data=await ecsService.listarComponentesService(id)
  
    resSend(res,{statusCode:201,status:"success",data})
})

export const agregarComponente = catchAsync(async(req,res,next)=>{
    const {ecs_id:id} = req.params
    const {ecs_id} = req.body

    if(requireField(id,ecs_id)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    const data=await ecsService.agregarComponenteService(id,ecs_id)
  
    resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarComponente = catchAsync(async(req,res,next)=>{
    const {ecs_id:id,componente_id} = req.params

    if(requireField(componente_id,id)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    const data=await ecsService.eliminarComponenteService(id,componente_id)
  
    resSend(res,{statusCode:201,status:"success",data})
})

export const listarTiposTecnogologia = catchAsync(async(req,res,next)=>{
   
    const data=ecsService.listarTiposTecnogologia()
  
    resSend(res,{statusCode:201,status:"success",data})
})

export const listarTiposEcs = catchAsync(async(req,res,next)=>{
    const data=ecsService.listarTiposEcs()
  
    resSend(res,{statusCode:201,status:"success",data})
})

export const agregarVersionEcs = catchAsync(async(req,res,next)=>{
  const {ecs_id:id} = req.params
  const {version,fechaFin} = req.body

  if(requireField(id,version,fechaFin)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }
  const data=await ecsService.agregarVersionService(id,version,fechaFin)
  if(typeof data.messageError === 'string'){
    return next(new appError(translatorNext(req,data.messageError),400))
  }
  resSend(res,{statusCode:201,status:"success",data})
})

export const editarVersionEcs = catchAsync(async(req,res,next)=>{
  const {ecs_id:id} = req.params
  const {estado,fechaFin} = req.body

  if(requireField(id,fechaFin)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }
  const data=await ecsService.editarVersionService(id,estado,fechaFin)

  resSend(res,{statusCode:201,status:"success",data})
})

export const listarVersionEcs = catchAsync(async(req,res,next)=>{

  const {ecs_id:id} = req.params

  if(requireField(id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }

  const data=await ecsService.listarVersionService(id)

  resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarEcs = catchAsync(async(req,res,next)=>{
    
  const {ecs_id:delete_id} = req.params

  if (requireField(delete_id)) {
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data=await ecsService.eliminarEcsService(delete_id)

  resSend(res,{statusCode:201,status:"success",data})
})
export const activarEcs = catchAsync(async(req,res,next)=>{
  
  const {ecs_id:activate_id} = req.params

  if (requireField(activate_id)) {
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data=await ecsService.activarEcsService(activate_id)

  resSend(res,{statusCode:201,status:"success",data})
})