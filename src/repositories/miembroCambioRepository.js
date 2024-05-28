import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {miembroCambioModel} = models

export const crearMiembroCambioRepository = handleFactory.createOne(miembroCambioModel)
export const editarMiembroCambioRepository = handleFactory.updateOne(miembroCambioModel)
export const obtenerMiembroCambioRepository = handleFactory.getOneId(miembroCambioModel)
export const listaMiembroCambioRepository = handleFactory.getAll(miembroCambioModel)
export const eliminarMiembroCambioRepository = handleFactory.clearOne(miembroCambioModel)