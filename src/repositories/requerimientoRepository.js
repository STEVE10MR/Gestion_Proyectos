import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {requerimientoModel} = models

export const crearRequermientoRepository= handleFactory.createOne(requerimientoModel)
export const editarRequermientoRepository = handleFactory.updateOne(requerimientoModel)
export const obtenerRequermientoRepository = handleFactory.getOneId(requerimientoModel)
export const listaRequermientoRepository = handleFactory.getAll(requerimientoModel)