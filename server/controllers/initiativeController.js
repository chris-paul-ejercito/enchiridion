const db = require('../initiativePsql.js');

const initiativeController = {};

initiativeController.getTest = (req, res, next) => {
  console.log('getTest');
  const query = 'SELECT * FROM "public"."creatures" LIMIT 100;';
  db
    .query(query)
    .then((data) => {
      console.log('getTest db.query', data.rows);
      res.locals.creatures = data.rows;
      console.log('res.locals.creatures', res.locals.creatures);
      return next();
    })
    .catch((err) => next({
      log: 'error occurred in initiativeController.getTest',
      status: 500,
      message: { error: err },
    }));
};

initiativeController.postTest = (req, res, next) => {
  console.log(req.body);
  const { name, initiative } = req.body;
  const values = [name, initiative];
  const query = 'INSERT INTO creatures (name) VALUES ($1)';
  console.log('postTest');
  console.log(values, query);
  // db.query(query, values, (err, res) => {
  //   if (err) {
  //     next({
  //       log: 'postTest unable to post into database',
  //     });
  //   }
  //   console.log(res.rows);
  //   return next();
  // });
  return next();
};

module.exports = initiativeController;
