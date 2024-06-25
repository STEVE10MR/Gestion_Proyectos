import * as miembroCambioService from '../services/miembroCambioService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import sendEmail from '../utils/sendEmail.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';
import resetUrl from '../utils/resetUrl.js';


export const registrarMiembroCambio= catchAsync(async (req,res,next)=>{
  const proyecto_id = req.proyecto_id
  const {email ,firtName,lastName} = req.body
  if(requireField(proyecto_id,email,firtName,lastName)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }
  const miembroObject = await miembroCambioService.crearMiembroCambioService(proyecto_id,email ,firtName,lastName);
 
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

export const agregarMiembroCambio = catchAsync(async(req,res,next)=>{
  const proyecto_id = req.proyecto_id
  const {user_id} = req.body
  if(requireField(proyecto_id,user_id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }

  const data=await miembroCambioService.agregarMiembroCambioService(proyecto_id,user_id)

  resSend(res,{statusCode:201,status:"success",data})
})


export const eliminarMiembroCambio = catchAsync(async(req,res,next)=>{
    
  const {id:delete_id} = req.params

  if (requireField(delete_id)) {
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data=await miembroCambioService.eliminarMiembroCambioService(delete_id)

  resSend(res,{statusCode:201,status:"success",data})
})
export const activarMiembroCambio = catchAsync(async(req,res,next)=>{
  
  const {id:activate_id} = req.params

  if (requireField(activate_id)) {
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data=await miembroCambioService.activarMiembroCambioService(activate_id)

  resSend(res,{statusCode:201,status:"success",data})
})


export const listarMiembroCambios = catchAsync(async (req,res,next)=>{

  let filter = {...req.body}
  
  const data=await miembroCambioService.listarMiembroCambioService(filter,req.query)
  resSend(res,{statusCode:201,status:"success",data})
    
})


export const editarMiembroCambio = catchAsync(async(req,res,next)=>{
  const {id:_id} = req.params
  const {user_id} = req.body

  if(requireField(_id,user_id)){
    return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }

  const data=await miembroCambioService.editarMiembroCambioService(_id,user_id)

  resSend(res,{statusCode:201,status:"success",data})
})

export const obtenerMiembroCambio = catchAsync(async (req,res,next)=>{

  const {id:_id} = req.params

  if(requireField(_id)){
      return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'),400))
  }
  
  const data=await miembroCambioService.obtenerMiembroCambioService(_id)
  resSend(res,{statusCode:201,status:"success",data})
    
})