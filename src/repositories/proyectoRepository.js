import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {proyectoModel} = models

export const crearProyectoRepository= handleFactory.createOne(proyectoModel)
export const editarProyectoRepository = handleFactory.updateOne(proyectoModel)
export const obtenerProyectoRepository = handleFactory.getOneId(proyectoModel)
export const listaProyectoRepository = handleFactory.getAll(proyectoModel)
export const eliminar = handleFactory.deleteOne(proyectoModel)
export const activar = handleFactory.ActiveOne(proyectoModel)