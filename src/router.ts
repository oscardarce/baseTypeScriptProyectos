import { Router } from "express"

const router = Router()

//Routing
router.get("/login", (req, resp) => {
   resp.send("Hola todos")
   console.log(req.body)
})

export default router;