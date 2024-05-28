import express from "express";
import userRoute from "./userRoute.js";
import authRoute from "./authRoute.js";
import equipoProyectoRoute from "./equipoProyectoRoute.js";
import estadoRoute from "./estadoRoute.js";
import estadoProblemaRoute from "./estadoProblemaRoute.js";
import metodologiaRoute from "./metodologiaRoute.js";
import rolEquipoRoute from "./rolEquipoRoute.js";
import proyectoRoute from "./proyectoRoute.js";
import moduloRequerimientoRoute from "./moduloRequerimientoRoute.js";
const route = express.Router()

route.use("/auth",authRoute)
route.use("/usuario",userRoute)
route.use("/equipoProyecto",equipoProyectoRoute)
route.use("/estado",estadoRoute)
route.use("/estadoproblema",estadoProblemaRoute)
route.use("/metodologia",metodologiaRoute)
route.use("/rolequipo",rolEquipoRoute)
route.use("/proyecto",proyectoRoute)
route.use("/moduloRequerimiento",moduloRequerimientoRoute)

export default route