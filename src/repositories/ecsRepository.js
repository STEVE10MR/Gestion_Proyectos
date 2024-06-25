import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {ecsModel} = models

export const crearEcsRepository = handleFactory.createOne(ecsModel)
export const editarEcsRepository = handleFactory.updateOne(ecsModel)
export const editarOneEcsRepository = handleFactory.updateSaveOne(ecsModel)
export const obtenerEcsRepository = handleFactory.getOneId(ecsModel)
export const obtenerOneEcsRepository = handleFactory.getOne(ecsModel)
export const listaEcsRepository = handleFactory.getAll(ecsModel)
export const eliminar = handleFactory.deleteOne(ecsModel)
export const activar = handleFactory.ActiveOne(ecsModel)