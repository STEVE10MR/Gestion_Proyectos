import express from "express";
import * as requerimientoController from '../controllers/requerimientoController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.route('/')
.get(requerimientoController.listarRequerimiento)
.post(requerimientoController.registrarRequerimiento)

router.route("/:id")
.patch(requerimientoController.editarRequerimiento)

router.route('/:id/activar')
.patch(requerimientoController.activarRequerimiento)

router.route('/:id/desactivar')
.patch(requerimientoController.eliminarRequerimiento)


export default router