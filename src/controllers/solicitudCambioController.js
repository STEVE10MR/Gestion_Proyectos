
import * as solicitudCambioService from '../services/solicitudCambioService.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';

export const listarSolicitudCambio = catchAsync(async (req, res, next) => {
  const filter = { ...req.body };
  const data = await solicitudCambioService.listarSolicitudCambioService(filter, req.query);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const registrarSolicitudCambio = catchAsync(async (req, res, next) => {
  const { user_id, informeIndicendencia_id, archivo, nombreDocumento, descripcionDocumento } = req.body;

  if (requireField(user_id, informeIndicendencia_id, archivo, nombreDocumento, descripcionDocumento)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await solicitudCambioService.registrarSolicitudCambioService({ user_id, informeIndicendencia_id, archivo, nombreDocumento, descripcionDocumento });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const editarSolicitudCambio = catchAsync(async (req, res, next) => {
  const _id = req.params.id;
  const { user_id, informeIndicendencia_id, archivo, nombreDocumento, descripcionDocumento } = req.body;

  if (requireField(_id, user_id, informeIndicendencia_id, archivo, nombreDocumento, descripcionDocumento)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await solicitudCambioService.editarSolicitudCambioService(_id, { user_id, informeIndicendencia_id, archivo, nombreDocumento, descripcionDocumento });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const eliminarSolicitudCambio = catchAsync(async (req, res, next) => {
  const { id: delete_id } = req.params;

  if (requireField(delete_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await solicitudCambioService.eliminarSolicitudCambioService(delete_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const activarSolicitudCambio = catchAsync(async (req, res, next) => {
  const { id: activate_id } = req.params;

  if (requireField(activate_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await solicitudCambioService.activarSolicitudCambioService(activate_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});
