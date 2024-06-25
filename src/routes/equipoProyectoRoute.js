import express from "express";
import * as equipoProyectoController from '../controllers/equipoProyectoController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.route('/')
.get(equipoProyectoController.listarEquipoProyecto)
//.post(equipoProyectoController.registrarEquipoProyecto)
.post(equipoProyectoController.agregarEquipoProyecto)

router.route("/:idEquipoProyecto")
.get(equipoProyectoController.obtenerEquipoProyecto)
.patch(equipoProyectoController.editarEquipoProyecto)

router.route('/:idEquipoProyecto/activar')
.patch(equipoProyectoController.activarEquipoProyecto)

router.route('/:idEquipoProyecto/desactivar')
.patch(equipoProyectoController.eliminarEquipoProyecto)

export default router