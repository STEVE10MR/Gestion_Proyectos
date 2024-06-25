import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {rolModel} = models

export const crearRolRepository = handleFactory.createOne(rolModel)
export const editarRolRepository = handleFactory.updateOne(rolModel)
export const obtenerRolRepository = handleFactory.getOneId(rolModel)
export const listaRolRepository = handleFactory.getAll(rolModel)
export const eliminar = handleFactory.deleteOne(rolModel)
export const activar = handleFactory.ActiveOne(rolModel)