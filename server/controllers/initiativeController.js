const db = require('../initiativePsql.js');

const initiativeController = {};

initiativeController.getCreatures = (req, res, next) => {
  const query = 'SELECT * FROM "public"."creatures" LIMIT 100;';
  db
    .query(query)
    .then((data) => {
      res.locals.creatures = data.rows;
      return next();
    })
    .catch((err) => next({
      log: 'error occurred in initiativeController.getCreatures',
      status: 500,
      message: { error: err },
    }));
};

initiativeController.postCreature = (req, res, next) => {
  const { name, initiative } = req.body;
  const text = 'INSERT INTO "public"."creatures" (name, initiative) VALUES ($1, $2) RETURNING *;';
  const values = [name, initiative];
  const query = { text, values };
  db
    .query(query)
    .then(data => {
      // console.log('postCreature rows RETURNING *', data.rows);
      [res.locals.inserted] = data.rows;
      // console.log(res.locals.inserted);
      next();
    })
    .catch((err) => {
      next({
        log: 'error occurred in initiativeController.postCreature',
        status: 500,
        message: { error: err },
      });
    });
};

module.exports = initiativeController;
