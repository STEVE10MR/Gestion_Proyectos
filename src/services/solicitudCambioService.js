
import * as solicitudCambioRepository from '../repositories/solicitudCambioRepository.js';

export const listarSolicitudCambioService = async (filter, query) => {
  return await solicitudCambioRepository.listarSolicitudCambioRepository(filter, query);
};

export const registrarSolicitudCambioService = async (data) => {
  return await solicitudCambioRepository.crearSolicitudCambioRepository(data);
};

export const editarSolicitudCambioService = async (_id, data) => {
  return await solicitudCambioRepository.editarSolicitudCambioRepository(_id, data);
};

export const eliminarSolicitudCambioService = async (_id) => {
  return await solicitudCambioRepository.eliminarSolicitudCambioRepository(_id);
};

export const activarSolicitudCambioService = async (_id) => {
  return await solicitudCambioRepository.activarSolicitudCambioRepository(_id);
};
