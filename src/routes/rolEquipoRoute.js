import express from "express";
import * as rolEquipoController from '../controllers/rolEquipoController.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.use(authMiddleware)


router.route('/')
.get(rolEquipoController.listarRolEquipo)
.post(rolEquipoController.registrarRolEquipo)

router.route('/:id')
.patch(rolEquipoController.editarRolEquipo)

router.route('/:id/activar')
.patch(rolEquipoController.activarRolEquipo)

router.route('/:id/desactivar')
.patch(rolEquipoController.eliminarRolEquipo)

export default router