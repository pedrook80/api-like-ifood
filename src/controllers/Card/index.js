const { Router } = require('express')
const routes = Router()

const CardController = require('./CardController')
const Middlewares = require('../../middlewares/index')


routes.post('/:user_id', Middlewares.authenticate, CardController.createCard)
routes.get('/:user_id/card', Middlewares.authenticate, CardController.getUserCard)
routes.patch('/:user_id/:card_id',  Middlewares.authenticate, CardController.updateCard)
routes.delete('/:user_id/:card_id', Middlewares.authenticate, CardController.deleteCard)
//routes.get('', Middlewares.authenticate, CardController.getCard)
routes.get('/:card_id', Middlewares.authenticate, CardController.getCardById)



module.exports = routes 