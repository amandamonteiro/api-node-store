'use strict'

const express = require('express');
const bodyParser = require('body-Parser')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const indexRouter = require('./routes/index-router');
const productRouter = require('./routes/product-router');
const dogRouter = require('./routes/dog-router');
const mercadoRouter = require('./routes/mercado-router');
const cpfRouter = require('./routes/cpf-router');
const carroRouter = require('./routes/carro-router');
const descontoRouter = require('./routes/desconto-router');
const customerRouter = require('./routes/customer-router');
const orderRouter = require('./routes/order-router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/nodeStore', { useUnifiedTopology: true, useNewUrlParser: true });
app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/dog', dogRouter);
app.use('/mercado', mercadoRouter);
app.use('/cpf', cpfRouter);
app.use('/carro', carroRouter);
app.use('/desconto', descontoRouter);
app.use('/customers', customerRouter);
app.use('/order', orderRouter);

module.exports = app;