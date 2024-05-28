import express from "express";
import * as equipoProyectoController from '../controllers/equipoProyectoController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.route('/')
.get(equipoProyectoController.listarEquipoProyecto)
//.post(equipoProyectoController.registrarEquipoProyecto)
.post(equipoProyectoController.agregarEquipoProyecto)

router.route("/:id")
.get(equipoProyectoController.obtenerEquipoProyecto)
.patch(equipoProyectoController.editarEquipoProyecto)
.delete(equipoProyectoController.eliminarEquipoProyecto)

export default router