import models from "../models/index.js"
import * as handleFactory from "./handleFactory.js"
const {equipoProyectoModel} = models

export const crearEquipoProyectoRepository = handleFactory.createOne(equipoProyectoModel)
export const editarEquipoProyectoRepository = handleFactory.updateOne(equipoProyectoModel)
export const obtenerEquipoProyectoRepository = handleFactory.getOneId(equipoProyectoModel)
export const listaEquipoProyectoRepository = handleFactory.getAll(equipoProyectoModel)
export const eliminarEquipoProyectoRepository = handleFactory.clearOne(equipoProyectoModel)
export const getModelAggregate = handleFactory.getModelAggregate(equipoProyectoModel)