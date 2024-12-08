import server from "./server";

const port = process.env.PORT || 4000

//Poder crear el servidor
server.listen(4000, () => {
   console.log("servidor funcionando en puerto", port)
})