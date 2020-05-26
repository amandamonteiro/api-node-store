'use strict'

const Carro = require('../models/desconto');
const repository = require('../repositories/desconto-repository')

exports.post = (req, res, next) => {

    let valorTotal = calcularDesconto(req);
    repository
        .create(req.body)
        .then(e => {
            res.status(200).send({
                message: "Produto: ",
                nome: req.body.name,
                price: valorTotal
            });
        }).catch(x => {
            res.status(400).send({
                message: "Erro ao gravar produto. ",
                erro: x
            });
        });

}

function calcularDesconto(req) {
    let valorTotal = 0;
    let quantity = req.body.quantity;

    if (quantity <= 10) {
        valorTotal = req.body.unitaryPrice * quantity;

        return valorTotal

    } else if (quantity <= 15) {
        valorTotal = (req.body.unitaryPrice * quantity);
        valorTotal -= valorTotal / 100 * 15;

        return valorTotal
    } else if (quantity <= 20) {
        valorTotal = (req.body.unitaryPrice * quantity);
        valorTotal -= valorTotal / 100 * 10;

        return valorTotal
    } else if (quantity <= 50) {
        valorTotal = req.body.unitaryPrice * quantity;
        valorTotal -= valorTotal / 100 * 20;

        return valorTotal
    } else {
        valorTotal = req.body.unitaryPrice * quantity;
        valorTotal -= valorTotal / 100 * 25;
        return valorTotal
    }
}