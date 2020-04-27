'use strict'

const express = require('express');
const router = express.Router();
const mercadoController = require('../controllers/mercado-controller');

router.post('/desconto', mercadoController.desconto);

module.exports = router;