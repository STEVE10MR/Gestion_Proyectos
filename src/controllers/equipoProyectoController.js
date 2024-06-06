import * as equipoProyectoService from '../services/equipoProyectoService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import sendEmail from '../utils/sendEmail.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';
import resetUrl from '../utils/resetUrl.js';


export const registrarEquipoProyecto= catchAsync(async (req,res,next)=>{
  const {proyecto_id} = req.params
  const {rolEquipo_id,email ,firtName,lastName} = req.body
  if(requireField(proyecto_id,rolEquipo_id,email,firtName,lastName)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }
  const miembroObject = await equipoProyectoService.crearEquipoProyectoService(proyecto_id,email ,firtName,lastName);
 
  if(requireField(miembroObject.user,miembroObject.token,miembroObject.password)){
    return next(new appError(translatorNext(req,miembroObject.messageError),400))
  }

  const user = miembroObject.user
  const token = miembroObject.token
  const password = miembroObject.password

  const message = "ignore"
  try {
    await sendEmail({
      email: user.email,
      subject: translatorNext(req,'RESET_TOKEN_EMAIL_SUBJECT'),
      message,
      url:resetUrl(req,`auth/verification/${token}`),
      req,
      passwordTemp:password,
      typeTemplate:2
    });

    let tokenVerify = miembroObject.token

    if(process.env.NODE_ENV !== 'development') tokenVerify = undefined

    return res.status(200).json({
      status: 'success',
      message: translatorNext(req,'TOKEN_SENT_SUCCESS'),
      tokenVerify
    });
  }catch (err) {

    await authService.sendResetPasswordErrorService(user)

    return next(
      new appError(translatorNext(req,'EMAIL_SEND_ERROR')),
      500
    );
  }
})

export const agregarEquipoProyecto = catchAsync(async(req,res,next)=>{
  const proyecto_id = req.proyecto_id
  const {user_id,rolEquipo_id} = req.body


  if(requireField(proyecto_id,user_id,rolEquipo_id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }

  const data=await equipoProyectoService.agregarEquipoProyectoService(proyecto_id,rolEquipo_id,user_id)

  resSend(res,{statusCode:201,status:"success",data})
})

export const agregarEquipoJefedeProyecto = catchAsync(async(req,res,next)=>{
  const proyecto_id = req.proyecto_id
  const {user_id} = req.body

  if(requireField(proyecto_id,user_id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }

  const data=await equipoProyectoService.agregarEquipoProyectoService(proyecto_id,user_id)

  resSend(res,{statusCode:201,status:"success",data})
})


export const editarEquipoProyecto = catchAsync(async(req,res,next)=>{
  const {id:_id} = req.params
  const {rolEquipo_id} = req.body

  if(requireField(_id,rolEquipo_id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }

  const data=await equipoProyectoService.editarEquipoProyectoService(_id,rolEquipo_id)

  resSend(res,{statusCode:201,status:"success",data})
})

export const eliminarEquipoProyecto = catchAsync(async (req,res,next)=>{

  const {idEquipoProyecto:_id} = req.params
  console.log(_id)
  if(requireField(_id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }

  const data=await equipoProyectoService.eliminarEquipoProyectoService(_id)
  resSend(res,{statusCode:201,status:"success",data})
  
})


export const listarEquipoProyecto = catchAsync(async (req,res,next)=>{
  let filter = {...req.body}
  
  const data=await equipoProyectoService.listarEquipoProyectoService(filter,req.query,'user_id rolEquipo_id')
  resSend(res,{statusCode:201,status:"success",data})
    
})

export const listarEquipoJefedeProyecto = catchAsync(async (req,res,next)=>{
  let filter = undefined
  const data=await equipoProyectoService.listarEquipoJefeDeProyectoService(filter,req.query,'user_id rolEquipo_id')
  resSend(res,{statusCode:201,status:"success",data})
    
})

export const obtenerEquipoProyecto = catchAsync(async (req,res,next)=>{

    const {idEquipoProyecto} = req.params

    if(requireField(idEquipoProyecto)){
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
    }
    
    const data=await equipoProyectoService.obtenerEquipoProyectoService(idEquipoProyecto)
    resSend(res,{statusCode:201,status:"success",data})
      
})

