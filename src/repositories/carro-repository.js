'use strict'

const Carro = require('../models/carro');

exports.create = (body) => {
    var carro = new Carro(body)
    return carro.save();

}
