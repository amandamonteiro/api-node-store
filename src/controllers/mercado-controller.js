'use strict'

exports.desconto = (req, resp, next) => {
    if(req.body.valorTotal >= 500){
        var novoValor = req.body.valorTotal - 20
        resp.status(200).send({
            desconto: " Você acaba de ganhar 20% de desconto no valor total de sua fatura! Novo valor: "  + novoValor
        })
    }
    else{
        resp.status(200).send({
            desconto: "Valor insuficiente para aquirir o desconto de 50%"
        })
    }
}