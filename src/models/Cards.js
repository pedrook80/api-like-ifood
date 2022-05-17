const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    validity: {
        type: String,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Cards', Schema)