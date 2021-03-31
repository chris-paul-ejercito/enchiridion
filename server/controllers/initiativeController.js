const db = require('../initiativePsql.js');

const initiativeController = {};

initiativeController.postTest = (req, res, next) => {
  console.log(req.body);
  console.log('postTest');
  next();
};

module.exports = initiativeController;
