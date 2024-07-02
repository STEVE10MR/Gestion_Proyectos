
import * as gestionProblemasRepository from '../repositories/gestionProblemasRepository.js';

export const listarGestionProblemasService = async (filter, query) => {
  return await gestionProblemasRepository.listarGestionProblemasRepository(filter, query);
};

export const registrarGestionProblemasService = async (data) => {
  return await gestionProblemasRepository.crearGestionProblemasRepository(data);
};

export const editarGestionProblemasService = async (_id, data) => {
  return await gestionProblemasRepository.editarGestionProblemasRepository(_id, data);
};

export const eliminarGestionProblemasService = async (_id) => {
  return await gestionProblemasRepository.eliminarGestionProblemasRepository(_id);
};

export const activarGestionProblemasService = async (_id) => {
  return await gestionProblemasRepository.activarGestionProblemasRepository(_id);
};
