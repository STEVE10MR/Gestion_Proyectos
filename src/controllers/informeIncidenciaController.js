
import * as informeIncidenciaService from '../services/informeIncidenciaService.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';

export const listarInformeIncidencia = catchAsync(async (req, res, next) => {
  const filter = { ...req.body };
  const data = await informeIncidenciaService.listarInformeIncidenciaService(filter, req.query);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const registrarInformeIncidencia = catchAsync(async (req, res, next) => {
  const { user_id, ecs_id, archivo, nombreDocumento, descripcionDocumento, indicacionesDocumento, tiposPruebasDocumento, efectosDocumento } = req.body;

  if (requireField(user_id, ecs_id, archivo, nombreDocumento, descripcionDocumento, indicacionesDocumento, tiposPruebasDocumento, efectosDocumento)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await informeIncidenciaService.registrarInformeIncidenciaService({ user_id, ecs_id, archivo, nombreDocumento, descripcionDocumento, indicacionesDocumento, tiposPruebasDocumento, efectosDocumento });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const editarInformeIncidencia = catchAsync(async (req, res, next) => {
  const _id = req.params.id;
  const { user_id, ecs_id, archivo, nombreDocumento, descripcionDocumento, indicacionesDocumento, tiposPruebasDocumento, efectosDocumento, fechaActualizado, fechaFin } = req.body;

  if (requireField(_id, user_id, ecs_id, archivo, nombreDocumento, descripcionDocumento, indicacionesDocumento, tiposPruebasDocumento, efectosDocumento)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await informeIncidenciaService.editarInformeIncidenciaService(_id, { user_id, ecs_id, archivo, nombreDocumento, descripcionDocumento, indicacionesDocumento, tiposPruebasDocumento, efectosDocumento, fechaActualizado, fechaFin });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const eliminarInformeIncidencia = catchAsync(async (req, res, next) => {
  const { id: delete_id } = req.params;

  if (requireField(delete_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await informeIncidenciaService.eliminarInformeIncidenciaService(delete_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const activarInformeIncidencia = catchAsync(async (req, res, next) => {
  const { id: activate_id } = req.params;

  if (requireField(activate_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await informeIncidenciaService.activarInformeIncidenciaService(activate_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});
