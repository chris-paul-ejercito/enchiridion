const express = require('express');

const app = express();
const path = require('path');

const apiRouter = require('./routes/api.js');

// statically server build
// serve index html on route '/'

app.use(express.json());

app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => res.status(200)
    .sendFile(path.join(__dirname, '../index.html')));
}

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'unknown middleware error has occurred',
    status: 500,
    message: { err: 'an error has occurred' },
  };
  const errorObj = { ...defaultErr, err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);
