const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(routes);

let store = {
  posts:
    [
      {
        name: "Top 10 ES6 Features every Web Developer must know",
        url: "https://webapplog.com/es6",
        text: "This essay will give you a quick introduction to ES6. If you don’t know what is ES6 it’s a new JavaScript implementation.",
        comments: [
          "No type optimization at all",
          "I think you’re undervaluing the benefit of ‘let’ and ‘const’.",
          "(p1,p2)=>{ ... }, i understand this, thank you!"
        ]
      }
    ]
}


app.listen(3000, () => {
  console.log('Open on port http://127.0.0.1:3000/');
});
