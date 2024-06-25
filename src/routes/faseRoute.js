import express from "express";
import * as faseController from '../controllers/faseController.js';
import ecsRoute from './ecsRoute.js'
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.use(authMiddleware)

router.route('/')
.get(faseController.listarFases)
.post(faseController.registrarFase)

router.use('/:fase_id/ecs',ecsRoute)

router.route("/:id")
.get(faseController.obtenerFase)
.patch(faseController.editarFase)

router.route('/:id/activar')
.patch(faseController.activarFase)

router.route('/:id/desactivar')
.patch(faseController.eliminarFase)


export default router