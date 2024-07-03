
import SolicitudCambio from '../models/solicitudCambioModel.js';
import * as handleFactory from './handleFactory.js';

export const crearSolicitudCambioRepository = handleFactory.createOne(SolicitudCambio);
export const editarSolicitudCambioRepository = handleFactory.updateOne(SolicitudCambio);
export const obtenerSolicitudCambioRepository = handleFactory.getOneId(SolicitudCambio);
export const listarSolicitudCambioRepository = handleFactory.getAll(SolicitudCambio);
export const eliminarSolicitudCambioRepository = handleFactory.deleteOne(SolicitudCambio);
export const activarSolicitudCambioRepository = handleFactory.ActiveOne(SolicitudCambio);
