import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {metodologiaModel} = models

export const crearMetodologiaRepository = handleFactory.createOne(metodologiaModel)
export const editarMetodologiaRepository = handleFactory.updateOne(metodologiaModel)
export const obtenerMetodologiaRepository = handleFactory.getOneId(metodologiaModel)
export const listaMetodologiaRepository = handleFactory.getAll(metodologiaModel)
export const eliminarMetodologiaRepository = handleFactory.clearOne(metodologiaModel)