import express from "express";
import * as rolController from '../controllers/rolController.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.use(authMiddleware)


router.route('/')
.get(rolController.listarRol)
.post(rolController.registrarRol)

router.route('/:id')
.patch(rolController.editarRol)


router.route('/:id/activar')
.patch(rolController.activarRol)

router.route('/:id/desactivar')
.patch(rolController.eliminarRol)

export default router