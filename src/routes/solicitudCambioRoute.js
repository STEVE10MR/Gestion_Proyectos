
import express from "express";
import * as solicitudCambioController from '../controllers/solicitudCambioController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/')
  .get(solicitudCambioController.listarSolicitudCambio)
  .post(solicitudCambioController.registrarSolicitudCambio);

router.route('/:id')
  .patch(solicitudCambioController.editarSolicitudCambio)
  .delete(solicitudCambioController.eliminarSolicitudCambio);

router.route('/:id/activar')
  .patch(solicitudCambioController.activarSolicitudCambio);

export default router;
