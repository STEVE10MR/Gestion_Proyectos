import models from "../models/index.js"
const {DetalleGestionProblemas} = models
import * as handleFactory from './handleFactory.js';

export const crearDetalleGestionProblemasRepository = handleFactory.createOne(DetalleGestionProblemas);
export const editarDetalleGestionProblemasRepository = handleFactory.updateOne(DetalleGestionProblemas);
export const obtenerDetalleGestionProblemasRepository = handleFactory.getOneId(DetalleGestionProblemas);
export const listarDetalleGestionProblemasRepository = handleFactory.getAll(DetalleGestionProblemas);
export const eliminarDetalleGestionProblemasRepository = handleFactory.deleteOne(DetalleGestionProblemas);
export const activarDetalleGestionProblemasRepository = handleFactory.ActiveOne(DetalleGestionProblemas);
