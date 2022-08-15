import express from 'express'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import welcomeRoute from './routes/welcomeRoute.js'
import signInRoute from './routes/signInRoute.js'
import movieRoutes from './routes/movieRoutes.js'

connectDB()

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// app.use(express.json())

app.use('/login', signInRoute)
app.use('/movie', movieRoutes)

app.get('/', welcomeRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3005

app.listen(
  PORT,
  console.log(
    `Server running in mode on port ${PORT}`
  )
)
