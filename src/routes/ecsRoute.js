import express from "express";
import * as ecsController from '../controllers/ecsController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.use(authMiddleware)

router.route('/')
.get(ecsController.listarEcs)
.post(ecsController.crearEcs)

router.get('/listar-tipos-ecs',ecsController.listarTiposEcs)
router.get('/listar-tipos-tecnologia',ecsController.listarTiposTecnogologia)


router.get('/:ecs_id/listar-historial-cambios',ecsController.listarHistorialCambios)

router.route('/:ecs_id')
.patch(ecsController.editarEcs)
.get(ecsController.obtenerEcs)

router.route('/:ecs_id/activar')
.patch(ecsController.activarEcs)

router.route('/:ecs_id/desactivar')
.patch(ecsController.eliminarEcs)

router.route('/:ecs_id/version')
.patch(ecsController.agregarVersionEcs)
.get(ecsController.listarVersionEcs)

router.route('/:ecs_id/componente')
.get(ecsController.listarComponentes)
.patch(ecsController.agregarComponente)

router.route('/:ecs_id/version/editar')
.patch(ecsController.editarVersionEcs)


router.route('/:ecs_id/componente/:componente_id')
.patch(ecsController.eliminarComponente)

export default router