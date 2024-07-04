import express from "express";
import * as tareasProyectoController from '../controllers/tareasProyectoController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router()

router.use(authMiddleware)

router.route('/')
.get(tareasProyectoController.listarTareas)

router.route('/obtener')
.get(tareasProyectoController.obtenerTarea)

export default router;