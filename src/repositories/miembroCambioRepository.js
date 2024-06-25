import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {miembroCambioModel} = models

export const crearMiembroCambioRepository = handleFactory.createOne(miembroCambioModel)
export const editarMiembroCambioRepository = handleFactory.updateOne(miembroCambioModel)
export const obtenerMiembroCambioRepository = handleFactory.getOneId(miembroCambioModel)
export const listaMiembroCambioRepository = handleFactory.getAll(miembroCambioModel)
export const eliminar = handleFactory.deleteOne(miembroCambioModel)
export const activar = handleFactory.ActiveOne(miembroCambioModel)
export const getModelAggregate = handleFactory.getModelAggregate(miembroCambioModel)