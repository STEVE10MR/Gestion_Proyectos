import express from "express";
import * as estadoGestionProblemasController from '../controllers/estadoGestionProblemasController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/')
.get(estadoGestionProblemasController.listarEstadoProblema)
.post(estadoGestionProblemasController.registrarEstadoProblema);

router.route('/:id')
.patch(estadoGestionProblemasController.editarEstadoProblema)
.delete(estadoGestionProblemasController.eliminarEstadoProblema);

router.route('/:id/activar')
.patch(estadoGestionProblemasController.activarEstadoProblema);

export default router;