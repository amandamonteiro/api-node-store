'use strict'

const Product = require('../models/product');

exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id)
    return res
}

exports.getByTag = async(tag) => {
    const res = Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags')
    return res
}

exports.create = async(product) => {
    var product = new Product(product);
    await product.save();

}

exports.update = async(id, product) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: product.title,
                description: product.description,
                price: product.price,
                slug: product.slug,
                tags: product.tags
            }
        });
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}