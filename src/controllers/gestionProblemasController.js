
import * as gestionProblemasService from '../services/gestionProblemasService.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import resSend from '../utils/resSend.js';
import translatorNext from '../utils/translatorNext.js';
import requireField from '../utils/requireField.js';

export const listarGestionProblemas = catchAsync(async (req, res, next) => {
  const filter = { ...req.body };
  const data = await gestionProblemasService.listarGestionProblemasService(filter, req.query);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const registrarGestionProblemas = catchAsync(async (req, res, next) => {
  const { user_id, estadoGestionProblemas, costoEstimado } = req.body;

  if (requireField(user_id, estadoGestionProblemas, costoEstimado)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await gestionProblemasService.registrarGestionProblemasService({ user_id, estadoGestionProblemas, costoEstimado });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const editarGestionProblemas = catchAsync(async (req, res, next) => {
  const _id = req.params.id;
  const { user_id, estadoGestionProblemas, costoEstimado } = req.body;

  if (requireField(_id, user_id, estadoGestionProblemas, costoEstimado)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await gestionProblemasService.editarGestionProblemasService(_id, { user_id, estadoGestionProblemas, costoEstimado });
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const eliminarGestionProblemas = catchAsync(async (req, res, next) => {
  const { id: delete_id } = req.params;

  if (requireField(delete_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await gestionProblemasService.eliminarGestionProblemasService(delete_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});

export const activarGestionProblemas = catchAsync(async (req, res, next) => {
  const { id: activate_id } = req.params;

  if (requireField(activate_id)) {
    return next(new AppError(translatorNext(req, 'MISSING_REQUIRED_FIELDS'), 400));
  }

  const data = await gestionProblemasService.activarGestionProblemasService(activate_id);
  resSend(res, { statusCode: 201, status: 'success', data });
});
