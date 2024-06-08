import express from "express";
import * as cronogramaController from '../controllers/cronogramaController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.use(authMiddleware)

router.route('/').get(cronogramaController.obtenerCronograma)
router.route('/:CronogramaId').patch(cronogramaController.agregarFaseCronograma)

export default router