const express = require('express');

const app = express();
const path = require('path');

// statically server build
// serve index html on route '/'

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => res.status(200)
    .sendFile(path.join(__dirname, '../index.html')));
}

app.listen(3000);
