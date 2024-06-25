
import express from "express";
import * as estadoController from '../controllers/estadoController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router()

//router.use(authMiddleware)

router.route('/')
.get(estadoController.listarEstado)
.post(estadoController.registrarEstado)

router.route("/:id")
.patch(estadoController.editarEstado)

router.route('/:id/activar')
.patch(estadoController.activarEstado)

router.route('/:id/desactivar')
.patch(estadoController.eliminarEstado)

export default router