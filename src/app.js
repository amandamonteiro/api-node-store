'use strict'

const express = require('express');
const bodyParser = require('body-Parser')
const indexRouter = require('./routes/index-router');
const productRouter = require('./routes/product-router');
const dogRouter = require('./routes/dog-router');
const mercadoRouter = require('./routes/mercado-router');
const mongoose = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/nodeStore', {useUnifiedTopology:true, useNewUrlParser:true})
app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/dog', dogRouter);
app.use('/mercado', mercadoRouter);

module.exports = app;