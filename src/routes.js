import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import authMiddleware from './app/middlewares/auth'

import ToolController from './app/controllers/ToolController'
import SessionsController from './app/controllers/SessionsController'
import UserController from './app/controllers/UserController'

const upload = multer(multerConfig)
const routes = new Router()

routes.get('/tools', ToolController.index)
routes.post('/sessions', SessionsController.store)

routes.use(authMiddleware)

routes.post('/users', UserController.store)
routes.post('/tools', upload.single('file'), ToolController.store)

export default routes
