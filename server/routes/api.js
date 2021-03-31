const express = require('express');

const initiativeController = require('../controllers/initiativeController.js');

const router = express.Router();

router.post('/',
  initiativeController.postTest, (req, res) => {
    res.status(200).json({ test: 'message' });
  });

module.exports = router;
