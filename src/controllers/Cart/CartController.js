const Cart = require('../../models/Cart')

const CartController = {

    async createCart(req, res) {

        const bodyData = req.body
        const { user_id } = req.params

        try {

            const createdCart = await Cart.create({...bodyData, purchaseConfirm:0, username: user_id})
            await createdCart.populate('products').execPopulate()

            return res.status(200).json(createdCart)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getUserCarts(req, res) {

        const { user_id } = req.params

        try {

            const userCarts = await Cart.find({ username: user_id }).populate('products')
            return res.status(200).json(userCarts)
            
        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async getCart(req, res) {

        const { user_id, cart_id } = req.params

        try {

            const cart = await Cart.findById(cart_id).populate('products')
            return res.status(200).json(cart)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async updateCart(req, res) {

        const bodyData = req.body
        const { cart_id } = req.params

        try {

            const updatedCart = await Cart.findByIdAndUpdate(cart_id, bodyData, { new: true })
            return res.status(200).json(updatedCart)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async confirmCart(req, res) {

        const bodyData = {purchaseConfirm:1}
        const { user_id } = req.params
        

        try {

            const confirmCart = await Cart.updateMany({username: user_id}, bodyData )
            return res.status(200).json(confirmCart)

        } catch(err) {

            return res.status(400).json(err)

        }

    },

    async deleteCart(req, res) {
        
        const { cart_id } = req.params

        try {

            const deletedCart = await Cart.findByIdAndDelete(cart_id)
            return res.status(200).json(deletedCart)

        } catch(err) {

            return res.status(400).json(err)

        }

    }

}

module.exports = CartController