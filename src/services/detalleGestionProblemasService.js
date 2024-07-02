
import * as detalleGestionProblemasRepository from '../repositories/detalleGestionProblemasRepository.js';

export const listarDetalleGestionProblemasService = async (filter, query) => {
  return await detalleGestionProblemasRepository.listarDetalleGestionProblemasRepository(filter, query);
};

export const registrarDetalleGestionProblemasService = async (data) => {
  return await detalleGestionProblemasRepository.crearDetalleGestionProblemasRepository(data);
};

export const editarDetalleGestionProblemasService = async (_id, data) => {
  return await detalleGestionProblemasRepository.editarDetalleGestionProblemasRepository(_id, data);
};

export const eliminarDetalleGestionProblemasService = async (_id) => {
  return await detalleGestionProblemasRepository.eliminarDetalleGestionProblemasRepository(_id);
};

export const activarDetalleGestionProblemasService = async (_id) => {
  return await detalleGestionProblemasRepository.activarDetalleGestionProblemasRepository(_id);
};
