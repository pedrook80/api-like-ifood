const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User'
    },
    quantityCart: {
        type: Number,
        required: true
    },
    payment: {
        card_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Card'
            },
        money: {
            type: Number
        },
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Adress',
        required: true
    }
})

module.exports = mongoose.model('Cart', Schema)