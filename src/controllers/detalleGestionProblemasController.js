import * as detalleGestionProblemasService from '../services/detalleGestionProblemasService.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';

export const listarDetalleGestionProblemas = catchAsync(async (req, res, next) => {
  const filter = { ...req.body };
  const data = await detalleGestionProblemasService.listarDetalleGestionProblemasService(filter, req.query);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const registrarDetalleGestionProblemas = catchAsync(async (req, res, next) => {
  const { gestionProblemas_id, solicitudCambio_id, descripcion } = req.body;

  if (requireField(gestionProblemas_id, solicitudCambio_id, descripcion)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await detalleGestionProblemasService.registrarDetalleGestionProblemasService({ gestionProblemas_id, solicitudCambio_id, descripcion });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const editarDetalleGestionProblemas = catchAsync(async (req, res, next) => {
  const _id = req.params.id;
  const { gestionProblemas_id, solicitudCambio_id, descripcion } = req.body;

  if (requireField(_id, gestionProblemas_id, solicitudCambio_id, descripcion)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await detalleGestionProblemasService.editarDetalleGestionProblemasService(_id, { gestionProblemas_id, solicitudCambio_id, descripcion });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const eliminarDetalleGestionProblemas = catchAsync(async (req, res, next) => {
  const { id: delete_id } = req.params;

  if (requireField(delete_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await detalleGestionProblemasService.eliminarDetalleGestionProblemasService(delete_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const activarDetalleGestionProblemas = catchAsync(async (req, res, next) => {
  const { id: activate_id } = req.params;

  if (requireField(activate_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await detalleGestionProblemasService.activarDetalleGestionProblemasService(activate_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});