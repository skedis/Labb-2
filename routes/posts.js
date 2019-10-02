const express = require('express');
const router = express.Router()

router.get('/posts', (req, res) => {
  res.send('test');
});

router.post('/posts', (req, res) => {
  
});

router.put('/posts/:postId', (req, res) => {

});

router.delete('/posts/:postId', (req, res) => {

});

module.exports = router;
