
import DetalleGestionProblemas from '../models/detalleGestionProblemasModel.js';
import * as handleFactory from './handleFactory.js';

export const crearDetalleGestionProblemasRepository = handleFactory.createOne(DetalleGestionProblemas);
export const editarDetalleGestionProblemasRepository = handleFactory.updateOne(DetalleGestionProblemas);
export const obtenerDetalleGestionProblemasRepository = handleFactory.getOneId(DetalleGestionProblemas);
export const listarDetalleGestionProblemasRepository = handleFactory.getAll(DetalleGestionProblemas);
export const eliminarDetalleGestionProblemasRepository = handleFactory.deleteOne(DetalleGestionProblemas);
export const activarDetalleGestionProblemasRepository = handleFactory.activateOne(DetalleGestionProblemas);
