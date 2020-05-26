'use strict'

const Carro = require('../models/carro');
const repository = require('../repositories/carro-repository')

exports.post = (req, res, next) => {
    var data = new Date();
    var dia = data.getDate();
    // var dia = 5;

    repository
        .create(req.body)
        .then(e => {
            if ((req.body.placa.substring(6, 7) % 2 == 0 && dia % 2 == 0) || (req.body.placa.substring(6, 7) % 2 == 1 && dia % 2 == 1)) {

                res.status(200).send({
                    message: "Este veículo liberado para circular hoje. "
                });
            } else {

                res.status(200).send({
                    message: "Este veículo não está liberado para circular hoje. "
                });
            }
        }).catch(x => {
            res.status(400).send({
                message: "Erro ao consultar sobre este veículo. ",
                erro: x
            });
        });
}