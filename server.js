const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

let store = {
  posts:
    [
      {
        name: 'Top 10 ES6 Features every Web Developer must know',
        url: 'https://webapplog.com/es6',
        text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6 it’s a new JavaScript implementation.',
        comments:
          [
            //text: 'No type optimization at all',
            //text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
            //text: '(p1,p2)=>{ ... } ,i understand this ,thank you !'
          ]
      }
    ]
}

app.get('/', function (req, res) {
  res.send('Root page');
});

// If no page is found send 404 status
app.use(function (req, res) {
  res.sendStatus(404);
});


// Start listening on port
app.listen(3000, () => {
  console.log(`Open on port http://127.0.0.1:3000/`);
});
