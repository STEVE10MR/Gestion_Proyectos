
import express from "express";
import * as detalleGestionProblemasController from '../controllers/detalleGestionProblemasController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/')
  .get(detalleGestionProblemasController.listarDetalleGestionProblemas)
  .post(detalleGestionProblemasController.registrarDetalleGestionProblemas);

router.route('/:id')
  .patch(detalleGestionProblemasController.editarDetalleGestionProblemas)
  .delete(detalleGestionProblemasController.eliminarDetalleGestionProblemas);

router.route('/:id/activar')
  .patch(detalleGestionProblemasController.activarDetalleGestionProblemas);

export default router;
