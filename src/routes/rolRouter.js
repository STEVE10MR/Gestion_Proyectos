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
export default router