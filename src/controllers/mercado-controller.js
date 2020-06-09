'use strict'

exports.desconto = (req, res, next) => {
    if (req.body.valorTotal >= 500) {
        var novoValor = req.body.valorTotal - 20
        res.status(200).send({
            desconto: " Você acaba de ganhar 20% de desconto no valor total de sua fatura! Novo valor: " + novoValor
        })
    } else {
        res.status(500).send({
            message: 'Falha ao processar sua requisição! ',
            data: (e)
        })
    }
}