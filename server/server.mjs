import express from "express"
import cors from "cors"
import { pool } from "./db.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
 res.send("Servidor funcionando")
})

app.get("/test", async (req,res)=>{

 const result = await pool.query("SELECT NOW()")

 res.json(result.rows)

})

app.listen(3001, ()=>{
 console.log("Servidor corriendo en puerto 3001")
})