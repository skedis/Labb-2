const express = require('express');
const router = express.Router();


let store = {
  posts:
    [
      {
        name: 'Top 10 ES6 Features every Web Developer must know',
        url: 'https://webapplog.com/es6',
        text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6 it’s a new JavaScript implementation.',
        comments: [
          'No type optimization at all',
          'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
          '(p1,p2)=>{ ... }, i understand this, thank you!',
        ],
      },
    ],
};

router.get('/posts', (req, res) => {
  res.send();
});

router.post('/posts', (req, res) => {

});

router.put('/posts/:postId', (req, res) => {

});

router.delete('/posts/:postId', (req, res) => {

});

module.exports = router;
