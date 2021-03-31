const { Pool } = require('pg');

const connectionString = 'postgres://ilgevpyi:3leq4XogPqpFi_GuzG_V-pg0eccZchlM@kashin.db.elephantsql.com:5432/ilgevpyi';

const pool = new Pool({
  connectionString,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('execute query', text);
    return pool.query(text, params, callback);
  },
};
