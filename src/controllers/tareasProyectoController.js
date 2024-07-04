import * as equipoProyectoService from '../services/equipoProyectoService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import sendEmail from '../utils/sendEmail.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';
import resetUrl from '../utils/resetUrl.js';


export const listarTareas  = catchAsync(async (req,res,next)=>{
    const {_id:user_id}=req.user
    const {selectedProject:proyecto_id,teamRole:equipoProyecto}= req.query
    
  
    if(requireField(user_id,proyecto_id,equipoProyecto)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    const data=await equipoProyectoService.listarTareasProyectoService(user_id,proyecto_id,equipoProyecto)
    resSend(res,{statusCode:201,status:"success",data})
  
  })


  export const obtenerTarea  = catchAsync(async (req,res,next)=>{
    const {_id:user_id}=req.user
    const {selectedProject:proyecto_id,tareaId:tarea_id}= req.query
  
    if(requireField(proyecto_id,tarea_id)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    const data=await equipoProyectoService.obtenerTareaProyectoService(proyecto_id,tarea_id)
    resSend(res,{statusCode:201,status:"success",data})
  
  })