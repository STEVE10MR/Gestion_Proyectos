import express from "express";
import * as estadoGestionProblemasController from '../controllers/estadoGestionProblemasController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/')
  .get(estadoGestionProblemasController.listarEstadoGestionProblemas)
  .post(estadoGestionProblemasController.registrarEstadoGestionProblemas);

router.route('/:id')
  .patch(estadoGestionProblemasController.editarEstadoGestionProblemas)
  .delete(estadoGestionProblemasController.eliminarEstadoGestionProblemas);

router.route('/:id/activar')
  .patch(estadoGestionProblemasController.activarEstadoGestionProblemas);

export default router;