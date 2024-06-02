import express from "express";
import * as equipoProyectoController from '../controllers/equipoProyectoController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true })

router.route('/')
.get(equipoProyectoController.listarEquipoProyecto)
//.post(equipoProyectoController.registrarEquipoProyecto)
.post(equipoProyectoController.agregarEquipoProyecto)

router.route('/add-project-manager')
.post(equipoProyectoController.agregarEquipoJefedeProyecto)

router.route('/list-project-manager')
.get(equipoProyectoController.listarEquipoJefedeProyecto)

router.route('/list-role')
.get(equipoProyectoController.listarEquipoProyectoPorUsuario)

router.route('/list-project')
.get(equipoProyectoController.listarEquipoProyectoPorUsuariorProyecto)

router.route("/:idEquipoProyecto")
.get(equipoProyectoController.obtenerEquipoProyecto)
.patch(equipoProyectoController.editarEquipoProyecto)
.delete(equipoProyectoController.eliminarEquipoProyecto)

export default router