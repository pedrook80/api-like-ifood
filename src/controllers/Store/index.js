const { Router } = require('express')
const routes = Router()

const StoresController = require('./StoresController')
const Middlewares = require('../../middlewares/index')


routes.post('/:user_id', Middlewares.authenticate, StoresController.createStore)
routes.get('/:user_id/store', Middlewares.authenticate, StoresController.getUserStore)
routes.patch('/:user_id/:store_id',  Middlewares.authenticate, StoresController.updateStore)
routes.delete('/:user_id/:store_id', Middlewares.authenticate, StoresController.deleteStore)
routes.get('', Middlewares.authenticate, StoresController.getStore)
routes.get('/:store_id', Middlewares.authenticate, StoresController.getStoreById)



module.exports = routes 