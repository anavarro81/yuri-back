import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
// import router from './router'
import { connectDB } from './src/config/bd'
import { corsConfig } from './src/config/cors'

// Realizamos la conexión a la base de datos
connectDB()

const app = express()

// Cors
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')  
})

// app.use('/', router)

export default app