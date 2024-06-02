import express from "express";
import * as userController from '../controllers/userController.js';
import * as miembroCambioController from '../controllers/miembroCambioController.js';
import * as equipoProyectoController from '../controllers/equipoProyectoController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router()

router.use(authMiddleware)

const myFunction = function(req,res,next){
    req.params.id=req.user._id
    next()
}

router.route('/obtenerUsuarios')
.get(userController.listarUsuarios)

router.route('/miembroCambio/obtenerUsuarios')
.get(userController.listarUsuarios)

router.get('/listar-comite-proyecto',myFunction,miembroCambioController.listarMiembrosCambioPorUsuario)
router.get('/listar-equipo-proyecto',myFunction,equipoProyectoController.listarEquipoProyectoPorUsuario)

router.post('/registrarUsuario',userController.registrarUsuario)
router.route('/informacion')
.get(userController.obtenerInformacion,userController.obtenerUsuario)

router.patch('/actualizarPassword',userController.obtenerInformacion,userController.editarPasswordUsuario)
router.patch('/actualizarName',userController.obtenerInformacion,userController.editarNameUsuario)


router.route('/:id')
.patch(userController.editarUsuario)
.get(userController.obtenerUsuario)

router.patch('/:id/activar',userController.activarUsuario)
router.patch('/:id/desactivar',userController.desactivarUsuario)

export default router