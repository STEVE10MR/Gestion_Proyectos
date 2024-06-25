
import express from "express";
import * as requerimientoModuloController from '../controllers/requerimientoModuloController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/')
.get(requerimientoModuloController.listarModuloRequerimiento)
.post(requerimientoModuloController.registrarModuloRequerimiento)

router.route("/:id")
.patch(requerimientoModuloController.editarModuloRequerimiento)
.get(requerimientoModuloController.obtenerModuloRequerimiento)

router.route('/:id/activar')
.patch(requerimientoModuloController.activarRequerimientoModulo)

router.route('/:id/desactivar')
.patch(requerimientoModuloController.eliminarRequerimientoModulo)

export default router