'use strict'

const Product = require('../models/product');
const repository = require('../repositories/product-repository')
const ValidationContract = require('../validator/contract');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar todos os produtos. '
        });
    }
}

exports.getBySlug = async(req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição! ',
            data: (e)
        });
    }
};

exports.getById = async(req, res, next) => {
    try {
        var produto = await repository.getById(req.params.id);
        res.status(200).send({})
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição! ',
            data: (e)
        });
    }
};

exports.getByTag = async(req, res, next) => {
    try {
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição! ',
            data: (e)
        });
    }
};

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.isRequired(req.body.title, 'O título é obrigatório.');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors());
        return;
    }
    try {
        await repository
            .create(req.body);
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição! ',
            data: (e)
        });
    }

};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso! '
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição! ',
            data: (e)
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: "Produto removido com sucesso! "
        });
    } catch (e) {
        res.status(400).send({
            message: "Falha ao remover o produto! ",
            data: (e)
        });
    }
};