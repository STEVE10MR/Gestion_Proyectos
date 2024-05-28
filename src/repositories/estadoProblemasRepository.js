import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {estadoProblemasModel} = models

export const crearEstadoProblemaRepository = handleFactory.createOne(estadoProblemasModel)
export const editarEstadoProblemaRepository = handleFactory.updateOne(estadoProblemasModel)
export const obtenerEstadoProblemaRepository = handleFactory.getOneId(estadoProblemasModel)
export const listaEstadoProblemaRepository = handleFactory.getAll(estadoProblemasModel)
export const eliminarEstadoProblemaRepository = handleFactory.clearOne(estadoProblemasModel)