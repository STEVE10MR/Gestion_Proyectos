import express from "express";
import * as proyectoController from '../controllers/proyectoController.js';
import requerimientoRoute from './requerimientoRoute.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';

import miembroCambioRoute from './miembroCambioRoute.js';
import equipoProyectoRoute from './equipoProyectoRoute.js';
import cronogramaRoute from './cronogramaRoute.js';
const router = express.Router()

const myFunction = function(req,res,next){
    req.proyecto_id=req.params.id
    next()
}

router.use(authMiddleware)

router.route('/')
.get(proyectoController.listarProyecto)
.post(proyectoController.registrarProyecto)

router.route('/:id')
.patch(proyectoController.editarProyecto)
.get(proyectoController.obtenerProyecto)

router.use('/:id/cronograma',myFunction,cronogramaRoute)
router.use('/:id/miembroCambio',myFunction,miembroCambioRoute)
router.use('/:id/equipoProyecto',myFunction,equipoProyectoRoute)
router.use('/:id/requerimiento',myFunction,requerimientoRoute)
export default router