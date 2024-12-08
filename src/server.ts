//const express = require("express") CJS Common JS
import express from "express" //ESM Ecmascript Moduules
import router from "./router"

//Crear instancia del servidor
const app = express()

//Leer datos de formularios
app.use(express.json());

app.use("/", router)

export default app