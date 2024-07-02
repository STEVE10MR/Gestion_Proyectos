
import InformeIncidencia from '../models/informeIncidenciaModel.js';
import * as handleFactory from './handleFactory.js';

export const crearInformeIncidenciaRepository = handleFactory.createOne(InformeIncidencia);
export const editarInformeIncidenciaRepository = handleFactory.updateOne(InformeIncidencia);
export const obtenerInformeIncidenciaRepository = handleFactory.getOneId(InformeIncidencia);
export const listarInformeIncidenciaRepository = handleFactory.getAll(InformeIncidencia);
export const eliminarInformeIncidenciaRepository = handleFactory.deleteOne(InformeIncidencia);
export const activarInformeIncidenciaRepository = handleFactory.activateOne(InformeIncidencia);
