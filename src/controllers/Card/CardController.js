const Card = require('../../models/Cards')

const CardController = {

    async createCard(req, res) {

        const bodyData = req.body
        const { user_id } = req.params

        try {

            const data = {username: user_id, ...bodyData}            

            const newCard = await Card.create(data)  
            await newCard.populate('username').execPopulate()          

            return res.status(200).json(newCard)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getUserCard(req, res) {

        const { user_id } = req.params

        try {

            const CardOfAnUser = await Card.find({ username: user_id })
            return res.status(200).json(CardOfAnUser)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async updateCard(req, res) {

        const bodyData = req.body
        const { card_id } = req.params

        try {

            const updatedCard = await Card.findByIdAndUpdate(card_id, bodyData, { new: true })
            return res.status(200).json(updatedCard)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async deleteCard(req, res) {
        
        const { card_id } = req.params

        try {

            const deletedCard = await Card.findByIdAndDelete(card_id)
            return res.status(200).json(deletedCard)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getCard(req, res) {

        try {

            const card = await Card.find()
            return res.status(200).json(card)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getCardById(req, res) {

        const { card_id } = req.params
        
        try {
            
            const card = await Card.findById(card_id)
            return res.status(200).json(card)

        } catch(err) {

            return res.status(400).json(err)

        }

    }
    
}

module.exports = CardController