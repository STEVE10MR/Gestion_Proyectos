import express from "express";
import * as metodologiaController from '../controllers/metodologiaController.js';
import faseRoute from "./faseRoute.js";
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router()

router.use(authMiddleware)

router.get('/',metodologiaController.listarMetodologias)

router.post('/registrar',metodologiaController.registrarMetodologia)

router.use("/:id/fases",faseRoute)

router.route("/:id")
.get(metodologiaController.obtenerMetodologia)
.patch(metodologiaController.editarMetodologia)
.delete(metodologiaController.eliminarMetodologia)


export default router