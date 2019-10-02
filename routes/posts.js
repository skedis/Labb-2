const express = require('express');
const router = express.Router()

router.get('/posts', (req, res) => {
  res.send('te');
});

router.post('/posts', (req, res) => {

});

router.put('/posts/:postId', (req, res) => {

});

router.delete('/posts/:postId', (req, res) => {

});

module.exports = router;
