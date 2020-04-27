'use strict'

const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dog-controller');

router.post('/adopt', dogController.adopt);

module.exports = router;

