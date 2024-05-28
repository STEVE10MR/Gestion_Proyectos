import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {cronogramaModel} = models

export const crearCronogramaRepository = handleFactory.createOne(cronogramaModel)
export const editarCronogramaRepository = handleFactory.updateOne(cronogramaModel)
export const obtenerCronogramaRepository = handleFactory.getOneId(cronogramaModel)
export const listaCronogramaRepository = handleFactory.getAll(cronogramaModel)