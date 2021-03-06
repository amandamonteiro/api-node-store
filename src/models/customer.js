'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'O e-mail é obrigatório'],
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Customer', schema);