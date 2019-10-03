const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
app.use(morgan('dev'));

// Connecting all endpoints
app.use(routes);

app.listen(3000, () => {
  console.log('Listening on http://127.0.0.1:3000/');
});
