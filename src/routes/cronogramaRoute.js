import express from "express";
import * as cronogramaController from '../controllers/cronogramaController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.use(authMiddleware)

router.route('/').get(cronogramaController.obtenerCronograma)
router.route('/:cronograma_id').patch(cronogramaController.agregarFaseCronograma)
router.route('/:cronograma_id/agregar-ecs').patch(cronogramaController.agregarEcsCronograma)
router.route('/:cronograma_id/agregar-miembro-ecs').patch(cronogramaController.agregarMiembroEcsCronograma)
router.route('/:cronograma_id/agregar-requerimiento-ecs').patch(cronogramaController.agregarRequerimientoEcsCronograma)
router.route('/:cronograma_id/quitar-fase').patch(cronogramaController.quitarFaseCronograma)
router.route('/:cronograma_id/quitar-ecs').patch(cronogramaController.quitarEcsCronograma)
router.route('/:cronograma_id/quitar-miembro').patch(cronogramaController.quitarMiembroEcsCronograma)
router.route('/:cronograma_id/quitar-requerimiento').patch(cronogramaController.quitarRequerimientoEcsCronograma)

export default router