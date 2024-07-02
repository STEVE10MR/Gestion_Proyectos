
import express from "express";
import * as gestionProblemasController from '../controllers/gestionProblemasController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/')
  .get(gestionProblemasController.listarGestionProblemas)
  .post(gestionProblemasController.registrarGestionProblemas);

router.route('/:id')
  .patch(gestionProblemasController.editarGestionProblemas)
  .delete(gestionProblemasController.eliminarGestionProblemas);

router.route('/:id/activar')
  .patch(gestionProblemasController.activarGestionProblemas);

export default router;
