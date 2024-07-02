
import * as estadoGestionProblemasService from '../services/estadoGestionProblemasService.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';

export const listarEstadoGestionProblemas = catchAsync(async (req, res, next) => {
  const filter = { ...req.body };
  const data = await estadoGestionProblemasService.listarEstadoGestionProblemasService(filter, req.query);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const registrarEstadoGestionProblemas = catchAsync(async (req, res, next) => {
  const { nombre } = req.body;

  if (requireField(nombre)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await estadoGestionProblemasService.registrarEstadoGestionProblemasService({ nombre });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const editarEstadoGestionProblemas = catchAsync(async (req, res, next) => {
  const _id = req.params.id;
  const { nombre } = req.body;

  if (requireField(_id, nombre)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await estadoGestionProblemasService.editarEstadoGestionProblemasService(_id, { nombre });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const eliminarEstadoGestionProblemas = catchAsync(async (req, res, next) => {
  const { id: delete_id } = req.params;

  if (requireField(delete_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await estadoGestionProblemasService.eliminarEstadoGestionProblemasService(delete_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const activarEstadoGestionProblemas = catchAsync(async (req, res, next) => {
  const { id: activate_id } = req.params;

  if (requireField(activate_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await estadoGestionProblemasService.activarEstadoGestionProblemasService(activate_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});
