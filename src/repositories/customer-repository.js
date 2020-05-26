'use strict'

const Customer = require('../models/customer');

// exports.get = async() => {
//     const res = await Customer.find({
//         active: true
//     }, 'title price slug');
//     return res;
// }

exports.create = async(data) => {
    var custumer = new Customer(data);
    await custumer.save();

}