//const express = require("express") CJS Common JS
import express from "express" //ESM Ecmascript Moduules

//Crear instancia del servidor
const app = express()

//Routing
app.get("/", (req , resp) => {
   resp.send("Hola Mundo en express")
})

const port = process.env.PORT || 4000

//Poder crear el servidor
app.listen(4000, () => {
   console.log("servidor funcionando en puerto", port)
})