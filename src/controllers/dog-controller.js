'use strict'

exports.adopt = (req, res, next) => {
    if ((req.body.idade <= 3 && req.body.raca === "Akita") || (req.body.idade <= 4 && req.body.raca != "Akita")) {
        res.status(200).send({
            notice: "Seu doguinho precisa tomar vacinas!",
            end: "Rua General Couto Magalhães",
            tel: "38080500"
        })
    }

    else {
        res.status(200).send({
            notice: "O seu doguinho está com todas as vacinas em dia!"
        })
    }
};