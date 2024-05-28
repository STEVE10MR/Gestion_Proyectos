import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {faseModel} = models

export const crearFaseRepository= handleFactory.createOne(faseModel)
export const editarFaseRepository= handleFactory.updateOne(faseModel)
export const obtenerFaseRepository= handleFactory.getOneId(faseModel)
export const listaFaseRepository= handleFactory.getAll(faseModel)
export const eliminarFaseRepository= handleFactory.clearOne(faseModel)