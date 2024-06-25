import express from "express";
import * as miembroCambioController from '../controllers/miembroCambioController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.route('/')
.get(miembroCambioController.listarMiembroCambios)
//.post(miembroCambioController.registrarEquipoProyecto)
.post(miembroCambioController.agregarMiembroCambio)

router.route("/:id")
.get(miembroCambioController.obtenerMiembroCambio)
.patch(miembroCambioController.editarMiembroCambio)

router.route('/:id/activar')
.patch(miembroCambioController.activarMiembroCambio)

router.route('/:id/desactivar')
.patch(miembroCambioController.eliminarMiembroCambio)

export default router