import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {estadoModel} = models

export const crearEstadoRepository = handleFactory.createOne(estadoModel)
export const editarEstadoRepository = handleFactory.updateOne(estadoModel)
export const obtenerEstadoRepository = handleFactory.getOneId(estadoModel)
export const listaEstadoRepository = handleFactory.getAll(estadoModel)
export const eliminarEstadoRepository = handleFactory.clearOne(estadoModel)