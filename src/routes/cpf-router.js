'use strict'

const express = require('express');
const router = express.Router();
const cpfController = require('../controllers/cpf-controller');

router.post('/', cpfController.post);

module.exports = router;