
import EstadoGestionProblemas from '../models/estadoGestionProblemasModel.js';
import * as handleFactory from './handleFactory.js';

export const crearEstadoGestionProblemasRepository = handleFactory.createOne(EstadoGestionProblemas);
export const editarEstadoGestionProblemasRepository = handleFactory.updateOne(EstadoGestionProblemas);
export const obtenerEstadoGestionProblemasRepository = handleFactory.getOneId(EstadoGestionProblemas);
export const listarEstadoGestionProblemasRepository = handleFactory.getAll(EstadoGestionProblemas);
export const eliminarEstadoGestionProblemasRepository = handleFactory.deleteOne(EstadoGestionProblemas);
export const activarEstadoGestionProblemasRepository = handleFactory.activateOne(EstadoGestionProblemas);
