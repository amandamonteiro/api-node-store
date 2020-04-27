'use strict'

const Product = require('../models/product');

exports.get = (req, resp, next) => {
    Product
        .find({
            active: true
        }, 'title price slug')
        .then(data => {
            resp.status(200).send(data);
        }).catch(e => {
            resp.status(400).send(e);
        });
}

exports.getBySlug = (req, resp, next) => {
    Product
        .findOne({
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            resp.status(200).send(data);
        }).catch(e => {
            resp.status(400).send(e);
        });
}

exports.getById = (req, resp, next) => {
    Product
        .findById(req.params.id)
        .then(data => {
            resp.status(200).send(data);
        }).catch(e => {
            resp.status(400).send(e);
        });
}

exports.getByTag = (req, resp, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            resp.status(200).send(data);
        }).catch(e => {
            resp.status(400).send(e);
        });
}

exports.post = (req, res, next) => {
    let product = new Product(req.body);

    product.save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
        }).catch(ex => {
            res.status(400).send({
                message: 'Falha ao cadastrar o produto',
                data: ex
            });
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};