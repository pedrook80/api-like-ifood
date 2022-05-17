const Store = require('../../models/Stores')

const StoresController = {

    async createStore(req, res) {

        const bodyData = req.body
        const { user_id } = req.params

        try {

            const data = {username: user_id, ...bodyData}            

            const newStore = await Store.create(data)  
            await newStore.populate('username').execPopulate()          

            return res.status(200).json(newStore)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getUserStore(req, res) {

        const { user_id } = req.params

        try {

            const StoreOfAnUser = await Store.find({ username: user_id })
            return res.status(200).json(StoreOfAnUser)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async updateStore(req, res) {

        const bodyData = req.body
        const { store_id } = req.params

        try {

            const updatedStore = await Store.findByIdAndUpdate(store_id, bodyData, { new: true })
            return res.status(200).json(updatedStore)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async deleteStore(req, res) {
        
        const { store_id } = req.params

        try {

            const deletedStore = await Store.findByIdAndDelete(store_id)
            return res.status(200).json(deletedStore)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getStore(req, res) {

        try {

            const stores = await Store.find()
            return res.status(200).json(stores)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getStoreById(req, res) {

        const { store_id } = req.params
        
        try {

            const stores = await Store.findById(store_id)
            return res.status(200).json(stores)

        } catch(err) {

            return res.status(400).json(err)

        }

    }
    
}

module.exports = StoresController