const express = require('express');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const routes = require('./routes');


const app = express();
app.use(morgan('dev'));
app.use(errorhandler());

// Connecting all endpoints
app.use(routes);

app.listen(3000, () => {
  console.log('Listening on http://127.0.0.1:3000/');
});
