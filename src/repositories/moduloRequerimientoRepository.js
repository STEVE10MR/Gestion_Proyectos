import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {moduloRequerimientoModel} = models

export const crearModuloRequerimientoRepository= handleFactory.createOne(moduloRequerimientoModel)
export const editarModuloRequerimientoRepository= handleFactory.updateOne(moduloRequerimientoModel)
export const eliminar= handleFactory.deleteOne(moduloRequerimientoModel)
export const obtenerModuloRequerimientoRepository= handleFactory.getOneId(moduloRequerimientoModel)
export const listaModuloRequerimientoRepository= handleFactory.getAll(moduloRequerimientoModel)
export const activar = handleFactory.ActiveOne(moduloRequerimientoModel)