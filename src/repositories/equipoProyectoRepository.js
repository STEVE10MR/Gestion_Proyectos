import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {equipoProyectoModel} = models

export const crearEquipoProyectoRepository = handleFactory.createOne(equipoProyectoModel)
export const editarEquipoProyectoRepository = handleFactory.updateOne(equipoProyectoModel)
export const obtenerEquipoProyectoRepository = handleFactory.getOne(equipoProyectoModel)
export const listaEquipoProyectoRepository = handleFactory.getAll(equipoProyectoModel)
export const eliminar = handleFactory.deleteOne(equipoProyectoModel)
export const activar = handleFactory.ActiveOne(equipoProyectoModel)
export const getModelAggregate = handleFactory.getModelAggregate(equipoProyectoModel)