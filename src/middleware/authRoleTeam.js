import catchAsync from "../utils/catchAsync.js";
import appError from '../utils/appError.js';
import translatorNext from '../utils/translatorNext.js';
import * as userService from '../services/userService.js';

export default function(...roles){
    return catchAsync(async (req,res,next)=>{

        const data=await userService.listarEquipoProyectoUserService(req.user._id)

        data.forEach(role => {
            if(!roles.includes(role.nombre)){
                return next(new appError(translatorNext(req,'ERROR_DENIED_ACCESS')))
            }
        });
        next()
    })
}
