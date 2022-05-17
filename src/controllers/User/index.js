const { Router } = require('express')
const routes = Router()

const UserController = require('./UserController')
const Middlewares = require('../../middlewares/index')

routes.post('', UserController.createUser)
routes.get('',Middlewares.authenticate, UserController.getUsers)
routes.get('/:user_id', UserController.getUserById)
routes.post('/login', UserController.login)

module.exports = routes 