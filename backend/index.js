import express from "express"
import cors from "cors"
import connectDataBase from "./database/dbconnect.js"
import usersRoutes from "./routes/users.routes.js"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

app.use(usersRoutes)

app.get('/', (req, res) => {
    res.send('Bienvenidos a tu Servidor de Articulos MERN!!!!!!!!')
  })
  

app.listen(PORT, () => {
     console.log("Servidor de NodeJs/Express iniciado en el puerto 4000 ✔✔")
     connectDataBase()
})