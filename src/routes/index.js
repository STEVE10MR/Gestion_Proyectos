import express from "express";
import userRoute from "./userRoute.js";
import authRoute from "./authRoute.js";
import equipoProyectoRoute from "./equipoProyectoRoute.js";
import estadoRoute from "./estadoRoute.js";
import estadoProblemaRoute from "./estadoProblemaRoute.js";
import metodologiaRoute from "./metodologiaRoute.js";
import rolEquipoRoute from "./rolEquipoRoute.js";
import rolRoute from "./rolRouter.js";
import proyectoRoute from "./proyectoRoute.js";
import moduloRequerimientoRoute from "./moduloRequerimientoRoute.js";
//import informeCambioRoute from "./informeCambioRoute.js";
//import solicitudCambioRoute from "./solicitudCambioRoute.js";
//import informeIncidenciaRoute from "./informeIncidenciaRoute.js";
import gestionProblemasRoute from "./gestionProblemasRoute.js";
import estadoGestionProblemasRoute from "./estadoGestionProblemasRoute.js";
import detalleGestionProblemasRoute from "./detalleGestionProblemasRoute.js";
const route = express.Router()

route.use("/auth",authRoute)
route.use("/usuario",userRoute)
route.use("/equipoProyecto",equipoProyectoRoute)
route.use("/estado",estadoRoute)
route.use("/estadoproblema",estadoProblemaRoute)
route.use("/metodologia",metodologiaRoute)
route.use("/rolequipo",rolEquipoRoute)
route.use("/rol",rolRoute)
route.use("/proyecto",proyectoRoute)
route.use("/moduloRequerimiento",moduloRequerimientoRoute)
//route.use("/informecambio", informeCambioRoute);
//route.use("/solicitudcambio", solicitudCambioRoute);
//route.use("/informeincidencia", informeIncidenciaRoute);
route.use("/gestionproblemas", gestionProblemasRoute);
route.use("/estadogestionproblemas", estadoGestionProblemasRoute);
route.use("/detallegestionproblemas", detalleGestionProblemasRoute);
export default route