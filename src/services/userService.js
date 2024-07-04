import * as userRepository from "../repositories/userRepository.js"
import * as equipoProyectoService from "./equipoProyectoService.js"
import * as miembroCambioService from "./miembroCambioService.js"

export const crearUserService = async (email ,firtName,lastName,role)=>{

  const existUser = await userRepository.obtenerUser({ email: email });
 
  if (existUser) {
    return {messageError:'USER_EXISTS'}
  }
  const user = userRepository.obtenerInstancia({ email: email })
  user.name = `${firtName} ${lastName}`
  user.role = role
  const password=user.generatePassword()
  const token = user.createPasswordResetToken()
  const userUpdate=await user.save()
  return {user:userUpdate , password , token}
}

export const editarUserService  = async(_id,firtName,lastName)=>{

  const user=await userRepository.editarUser({_id},{name:`${firtName} ${lastName}`})

  return user
}


export const editarNameUserService  = async(_id,firtName,lastName)=>{

  const user=await userRepository.editarUser({_id},{name:`${firtName} ${lastName}`})

  return user
}


export const editarPasswordUserService = async (_id,passwordCurrent,passwordNew,passwordNewConfirm) => {

    const user = await userRepository.obtenerUser({_id},"","+password")
  
    if (!(await user.correctPassword(passwordCurrent, user.password))) {
      return 'CURRENT_PASSWORD_WRONG'
    }
    user.password = passwordNew;
    user.passwordConfirm = passwordNewConfirm;
    await user.save();
  
    return user
};

export const obtenerUserService = async(_id)=>{
  const user=await userRepository.obtenerUserId(_id)
  return user
}

export const listarUserService = async (body,query,popOptions)=>{
  let filter= undefined
  if(body) filter = {...body}
  
  const user=await userRepository.listaUser(filter,query,popOptions)

  return user
  
}

export const listarMiembroCambioUserService = async (user_id)=>{
  const user=await miembroCambioService.listarMiembroCambioService({user_id},undefined,"+proyecto_id")
  return user
  
}
export const listarEquipoProyectoUserService = async (user_id)=>{

  const user=await equipoProyectoService.listarEquipoProyectoUserService(user_id)
  return user
}

export const listarProyectoPorRolEquipoUserService = async (user_id,rolEquipo_id)=>{

  const user=await equipoProyectoService.listarEquipoProyectoService({user_id,rolEquipo_id},undefined,"proyecto_id user_id rolEquipo_id")
  return user
}

export const activarUserService = async(_id)=>{

  const user=await userRepository.activarUser({_id})

  return user
}

export const desactivarUserService = async(_id)=>{

  const user=await userRepository.desactivarUser({_id})

  return user
}




export const editarRoleUserService  = async(_id,role)=>{

  if(!(["user","support"].includes(role))){
      return 'ERROR_ROLE'
  }
  const user=await userRepository.editarUser({_id},{role})

  return user
}

export const createUserAdmin = async (firtName,lastName,password)=>{

  const user = userRepository.getInstanceConstructor({name:`${firtName} ${lastName}`,email:"admin@gmail.com",password,role:"admin"})
  
  await user.save({validateBeforeSave: false })

  return user
}