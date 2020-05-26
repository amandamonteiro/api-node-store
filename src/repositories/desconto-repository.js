'use strict'

const Desconto = require('../models/desconto');

exports.create = (body) => {
    var desconto = new Desconto(body)
    return desconto.save();

}