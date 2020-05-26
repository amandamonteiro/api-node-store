'use strict'

const Cpfs = require('../models/cpf');
// const repository = require('../repositories/cpf-repository');

exports.post = (req, res, next) => {

    let cpfsInvalidos = [];
    let cpfsAddComSucesso = [];

    req.body.cpfs.forEach(cpf => {

        if (!validarCPF(cpf)) {
            cpfsInvalidos.push(cpf)
        } else {
            cpfsAddComSucesso.push(cpf)
        }
    });

    if (cpfsInvalidos.length >= 1) {
        res.status(400).send({
            message: "Cpf inválido: ",
            cpfInvalido: cpfsInvalidos
        });
    } else {
        res.status(200).send({
            message: "Os Cpfs digitados são válidos! ",
        });
    }

}



function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1º digito	
    var add = 0;
    for (var i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2º digito	
    add = 0;
    for (var i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}