const { Router } = require('express')
const routes = Router()

const CartController = require('./CartController')
const Middlewares = require('../../middlewares/index')

routes.post('/:user_id', Middlewares.authenticate, CartController.createCart)
routes.get('/:user_id', Middlewares.authenticate, CartController.getUserCarts)
routes.get('/:cart_id/cart', Middlewares.authenticate, CartController.getCart)
routes.patch('/:cart_id', Middlewares.authenticate, CartController.updateCart)
routes.delete('/:cart_id', Middlewares.authenticate, CartController.deleteCart)
routes.patch('/:user_id/confirm', Middlewares.authenticate, CartController.confirmCart)


module.exports = routes 