const express = require('express');

const initiativeController = require('../controllers/initiativeController.js');

const router = express.Router();

router.get('/',
  initiativeController.getCreatures, (req, res) => {
    res.status(200).json(res.locals.creatures);
  });

router.post('/',
  initiativeController.postCreature, (req, res) => {
    res.status(200).json(res.locals.inserted);
  });

router.delete('/',
  initiativeController.deleteCreature, (req, res) => {
    res.status(200).json(res.locals.deleted);
  });

module.exports = router;
