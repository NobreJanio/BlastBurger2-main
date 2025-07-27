import 'dotenv/config'
import express from 'express'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import cors from 'cors'
import './database/index.js'
import routes from './routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

class App {
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
    this.connectMongo()
  }

  middlewares() {
    this.server.use(cors({
      origin: [
        'http://localhost:5173',
        'http://localhost:5174', 
        'http://localhost:5175',
        'http://127.0.0.1:5175',
        'http://127.0.0.1:5173',
        'http://127.0.0.1:5174'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
      credentials: true,
      optionsSuccessStatus: 200
    }))
    
    // Middleware para tratar preflight requests
    this.server.options('*', (req, res) => {
      res.header('Access-Control-Allow-Origin', req.headers.origin)
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin')
      res.header('Access-Control-Allow-Credentials', 'true')
      res.sendStatus(200)
    })
    
    this.server.use(express.json())
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'uploads'))
    )
  }

  routes() {
    this.server.use(routes)
  }

  connectMongo() {
    mongoose.connect(process.env.MONGODB_URL)
  }
}

export default new App().server