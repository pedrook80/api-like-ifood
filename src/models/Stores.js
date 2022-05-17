const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    storeName: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    storeImage: {
        type: String
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Stores', Schema)