import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './src/config/bd'
import { corsConfig } from './src/config/cors'
import testimonialsRoutes from './src/routes/testimonials.route'
import serviceRouter from './src/routes/services.route'

// Realizamos la conexión a la base de datos
connectDB()

const app = express()

// Cors
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Servidor funcionando...')  
// })

app.use('/services', serviceRouter)
app.use('/testimonials', testimonialsRoutes)





export default app