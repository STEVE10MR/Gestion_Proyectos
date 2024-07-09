import express from "express";
import * as tareasProyectoController from '../controllers/tareasProyectoController.js';
import authRole from '../middleware/authRole.js';
import authMiddleware from '../middleware/authMiddleware.js';
import multer from "multer"
import path from "path"
import fs from "fs"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});


const upload = multer({ storage: storage });

const router = express.Router()

router.use(authMiddleware)

router.route('/')
.get(tareasProyectoController.listarTareas)

router.route('/obtener')
.get(tareasProyectoController.obtenerTarea)

router.route('/:idTarea')
.patch(upload.any(),tareasProyectoController.editarTarea)

export default router;