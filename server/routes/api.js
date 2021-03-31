const express = require('express');

const initiativeController = require('../controllers/initiativeController.js');

const router = express.Router();

router.get('/',
  initiativeController.getTest, (req, res) => {
    console.log('api router get', res.locals.creatures);
    res.status(200).json(res.locals.creatures);
  });

router.post('/',
  initiativeController.postTest, (req, res) => {
    res.status(200).json({ test: '/api POST' });
  });

module.exports = router;
