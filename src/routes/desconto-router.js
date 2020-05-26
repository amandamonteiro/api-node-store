'use strict'

const express = require('express');
const router = express.Router();
const descontoController = require('../controllers/desconto-controller');

router.post('/', descontoController.post);

module.exports = router;