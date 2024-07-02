
import * as informeIncidenciaRepository from '../repositories/informeIncidenciaRepository.js';

export const listarInformeIncidenciaService = async (filter, query) => {
  return await informeIncidenciaRepository.listarInformeIncidenciaRepository(filter, query);
};

export const registrarInformeIncidenciaService = async (data) => {
  return await informeIncidenciaRepository.crearInformeIncidenciaRepository(data);
};

export const editarInformeIncidenciaService = async (_id, data) => {
  return await informeIncidenciaRepository.editarInformeIncidenciaRepository(_id, data);
};

export const eliminarInformeIncidenciaService = async (_id) => {
  return await informeIncidenciaRepository.eliminarInformeIncidenciaRepository(_id);
};

export const activarInformeIncidenciaService = async (_id) => {
  return await informeIncidenciaRepository.activarInformeIncidenciaRepository(_id);
};
