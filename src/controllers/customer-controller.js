'use strict'

const repository = require('../repositories/customer-repository');
const ValidationContract = require('../validator/contract');

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter no mínimo 3 caractres.');
    contract.isEmail(req.body.email, 'O e-mail digitado é invalido! ');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter no mínimo 3 caracteres.');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors());
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e) {
        resp.status(500).send({
            message: 'Falha ao processar sua requisição! '
        });
    }

};