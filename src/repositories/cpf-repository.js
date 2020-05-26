'use strict'

const Cpf = require('../models/cpf');

exports.create = (cpfs) => {
    var cpf = new Cpf({
        cpfs: cpfs
    });
    return cpf.save();

}

