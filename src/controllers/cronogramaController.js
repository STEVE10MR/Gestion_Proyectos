import * as cronogramaService from '../services/cronogramaService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const agregarFaseCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId,fechaInicio,fechaFin}=req.body

    if (requireField(cronograma_id,faseId,fechaInicio,fechaFin)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.agregarFaseCronogramaService(cronograma_id,faseId,fechaFin,fechaInicio)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})


export const agregarEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {_id:projectManagerId}=req.user
    const {faseId,ecsId}=req.body
    
    if (requireField(cronograma_id,faseId,ecsId,projectManagerId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.agregarEcsCronogramaService(cronograma_id,faseId,ecsId)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})

export const agregarMiembroEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId,ecsId,rolId,miembroId}=req.body
    if (requireField(cronograma_id,faseId,ecsId,miembroId,rolId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }
    const data=await cronogramaService.agregarMiembroEcsCronogramaService(cronograma_id,faseId,ecsId,rolId,miembroId)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})
export const agregarRequerimientoEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {_id:projectManagerId}=req.user
    const {faseId,ecsId,requerimientoId}=req.body
   
    if (requireField(cronograma_id,faseId,ecsId,projectManagerId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.agregarRequerimientoEcsCronogramaService(cronograma_id,faseId,ecsId,requerimientoId,projectManagerId)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})
export const agregarTareaEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId,ecsId,tarea_id,titulo,descripcion,equipoMiembroId,fechaFin,fechaInicio}=req.body
   
    if (requireField(cronograma_id,faseId,ecsId,titulo,descripcion,equipoMiembroId,fechaFin,fechaInicio)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.agregarTareaEcsCronogramaService(cronograma_id,faseId,ecsId,tarea_id,titulo,descripcion,equipoMiembroId,fechaFin,fechaInicio)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})

export const obtenerMiembrosEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId,ecsId}=req.body
   
    if (requireField(cronograma_id,faseId,ecsId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.obtenerMiembroEcsCronogramaService(cronograma_id,faseId,ecsId)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})

export const quitarFaseCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId}=req.body

    if (requireField(cronograma_id,faseId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.quitarFaseCronogramaService(cronograma_id,faseId)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})
export const quitarEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId,ecsId}=req.body
    if (requireField(cronograma_id,faseId,ecsId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.quitarEcsCronogramaService(cronograma_id,faseId,ecsId)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})

export const quitarMiembroEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId,ecsId,miembroId}=req.body
    if (requireField(cronograma_id,faseId,ecsId,miembroId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.quitarMiembroEcsCronogramaService(cronograma_id,faseId,ecsId,miembroId)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})

export const quitarRequerimientoEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId,ecsId,requerimientoId}=req.body
    if (requireField(cronograma_id,faseId,ecsId,requerimientoId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.quitarRequerimientoEcsCronogramaService(cronograma_id,faseId,ecsId,requerimientoId)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})

export const quitarTareaEcsCronograma = catchAsync(async(req,res,next)=>{
    const {cronograma_id} = req.params
    const {faseId,ecsId,tarea_id}=req.body
    if (requireField(cronograma_id,faseId,tarea_id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.quitarTareaEcsCronogramaService(cronograma_id,faseId,ecsId,tarea_id)

    if(typeof data === 'string'){
        return next(new appError(translatorNext(req,data),400))
    }
    resSend(res,{statusCode:201,status:"success",data})
})

export const obtenerCronograma = catchAsync(async(req,res,next)=>{
    const {id} = req.params
    if (requireField(id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.obtenerCronogramaService(id)

    resSend(res,{statusCode:201,status:"success",data})
})