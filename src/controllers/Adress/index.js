const { Router } = require('express')
const routes = Router()

const AdressController = require('./AdressController')
const Middlewares = require('../../middlewares/index')


routes.post('/:user_id', Middlewares.authenticate, AdressController.createAdress)
routes.get('/:user_id/adress', Middlewares.authenticate, AdressController.getUserAdress)
routes.patch('/:adress_id',  Middlewares.authenticate, AdressController.updateAdress)
routes.delete('/:adress_id', Middlewares.authenticate, AdressController.deleteAdress)
//routes.get('', Middlewares.authenticate, AdressController.getAdress)
routes.get('/:adress_id', Middlewares.authenticate, AdressController.getAdressById)



module.exports = routes 