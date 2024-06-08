import * as cronogramaService from '../services/cronogramaService.js';
import catchAsync from '../utils/catchAsync.js';
import appError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';


export const agregarFaseCronograma = catchAsync(async(req,res,next)=>{
    const {CronogramaId} = req.params
    const {faseId}=req.body

    if (requireField(CronogramaId,faseId)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.agregarFaseCronogramaService(CronogramaId,faseId)

    resSend(res,{statusCode:201,status:"success",data})
})

export const obtenerCronograma = catchAsync(async(req,res,next)=>{
    const {id} = req.params
    console.log(id)
    if (requireField(id)) {
        return next(new appError(translatorNext(req,'MISSING_REQUIRED_FIELDS'), 400));
    }

    const data=await cronogramaService.obtenerCronogramaService(id)

    resSend(res,{statusCode:201,status:"success",data})
})