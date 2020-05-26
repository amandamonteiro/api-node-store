'use strict'

const express = require('express');
const router = express.Router();
const carroController = require('../controllers/carro-controller');

router.post('/', carroController.post);

module.exports = router;