import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {rolEquipoModel} = models

export const crearRolEquipoRepository = handleFactory.createOne(rolEquipoModel)
export const editarRolEquipoRepository = handleFactory.updateOne(rolEquipoModel)
export const obtenerRolEquipoRepository = handleFactory.getOneId(rolEquipoModel)
export const listaRolEquipoRepository = handleFactory.getAll(rolEquipoModel)
export const eliminar = handleFactory.deleteOne(rolEquipoModel)
export const activar = handleFactory.ActiveOne(rolEquipoModel)