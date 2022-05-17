const { Router } = require('express')
const routes = Router()

const ProductController = require('./ProductController')
const Middlewares = require('../../middlewares/index')

routes.post('/:store_id', Middlewares.authenticate, ProductController.createProduct)
routes.get('/:store_id/products', Middlewares.authenticate, ProductController.getStoreProducts)
routes.patch('/:store_id/:product_id',  Middlewares.authenticate, ProductController.updateProduct)
routes.delete('/:store_id/:product_id', Middlewares.authenticate, ProductController.deleteProduct)
routes.get('', Middlewares.authenticate, ProductController.getProducts)
routes.get('/:product_id', Middlewares.authenticate, ProductController.getProductById)

module.exports = routes 