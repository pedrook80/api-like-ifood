const { Router } = require('express')

const UserRoute = require('../controllers/User/index')
const ProductRoute = require('../controllers/Product/index')
const CartRout = require('../controllers/Cart/index')
const StoresRoute = require('../controllers/Store/index')
const AdressRoute = require('../controllers/Adress/index')
const CardRoute = require('../controllers/Card/index')
const middlewares = require('../middlewares/index')

const routes = Router()

routes.get('/',middlewares.authenticate, (req, res) => {
    res.send('Olá Mundo')
})

routes.use('/users',UserRoute)
routes.use('/products',ProductRoute)
routes.use('/carts',CartRout)
routes.use('/stores',StoresRoute)
routes.use('/adress',AdressRoute)
routes.use('/card',CardRoute)

module.exports = routes 