
import GestionProblemas from '../models/gestionProblemasModel.js';
import * as handleFactory from './handleFactory.js';

export const crearGestionProblemasRepository = handleFactory.createOne(GestionProblemas);
export const editarGestionProblemasRepository = handleFactory.updateOne(GestionProblemas);
export const obtenerGestionProblemasRepository = handleFactory.getOneId(GestionProblemas);
export const listarGestionProblemasRepository = handleFactory.getAll(GestionProblemas);
export const eliminarGestionProblemasRepository = handleFactory.deleteOne(GestionProblemas);
export const activarGestionProblemasRepository = handleFactory.ActiveOne(GestionProblemas);
