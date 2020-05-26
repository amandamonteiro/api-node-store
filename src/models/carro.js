'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({

    marca: {
        type: String,
        required: true,
        trim: true
    },
    modelo: {
        type: String,
        required: true,
        trim: true
    },
    cor: {
        type: String,
        required: true,
        trim: true
    },
    placa: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('carros', schema);