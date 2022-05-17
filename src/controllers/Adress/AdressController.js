const Adress = require('../../models/Adress')

const AdressController = {

    async createAdress(req, res) {

        const bodyData = req.body
        const { user_id } = req.params

        try {

            const data = {username: user_id, ...bodyData}            

            const newAdress = await Adress.create(data)  
            await newAdress.populate('username').execPopulate()          

            return res.status(200).json(newAdress)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getUserAdress(req, res) {

        const { user_id } = req.params

        try {

            const AdressOfAnUser = await Adress.find({ username: user_id })
            return res.status(200).json(AdressOfAnUser)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async updateAdress(req, res) {

        const bodyData = req.body
        const { adress_id } = req.params

        try {

            const updatedAdress = await Adress.findByIdAndUpdate(adress_id, bodyData, { new: true })
            return res.status(200).json(updatedAdress)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async deleteAdress(req, res) {
        
        const { adress_id } = req.params

        try {

            const deletedAdress = await Adress.findByIdAndDelete(adress_id)
            return res.status(200).json(deletedAdress)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getAdress(req, res) {

        try {

            const Adress = await Adress.find()
            return res.status(200).json(Adress)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getAdressById(req, res) {

        const { adress_id } = req.params
        
        try {

            const adress = await Adress.findById(adress_id)
            return res.status(200).json(adress)

        } catch(err) {

            return res.status(400).json(err)

        }

    }
    
}

module.exports = AdressController