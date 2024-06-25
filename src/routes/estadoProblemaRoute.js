import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';
import express from "express";
import * as estadoProblemasController from '../controllers/estadoProblemasController.js';

const router = express.Router()

router.use(authMiddleware)

router.route('/')
.get(estadoProblemasController.listarEstadoProblema)
.post(estadoProblemasController.registrarEstadoProblema)

router.route("/:id")
.patch(estadoProblemasController.editarEstadoProblema)

router.route('/:id/activar')
.patch(estadoProblemasController.activarEstadoProblema)

router.route('/:id/desactivar')
.patch(estadoProblemasController.eliminarEstadoProblema)

export default router