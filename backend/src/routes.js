import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer.js'

import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController.js'
import ProductController from './app/controllers/ProductController.js'
import CategoryController from './app/controllers/CategoryController.js'
import OrderController from './app/controllers/OrderController.js'

import authMiddleware from './app/middlewares/auth.js'

const upload = multer(multerConfig)

const routes = new Router()

// Rotas públicas
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

// Rotas públicas para visualização de produtos e categorias
routes.get('/products', ProductController.index)
routes.get('/categories', CategoryController.index)

// Rotas protegidas por autenticação
routes.use(authMiddleware)

routes.post('/products', upload.single('file'), ProductController.store)
routes.put('/products/:id', upload.single('file'), ProductController.update)
routes.delete('/products/:id', ProductController.delete)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.get('/orders', OrderController.index)
routes.put('/orders/:id', OrderController.update)

export default routes