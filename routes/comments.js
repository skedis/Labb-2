const express = require('express');
const router = express.Router();

router.use(express.json());

let store = require('./data');


router.get('/posts/:postId/comments', (req, res) => {
  res.status(200).send(store.posts[req.params.postId].comments);
});

router.post('/posts/:postId/comments', (req, res) => {
  let newComment = req.body;
  let id = store.posts[req.params.postId].comments.length;

  store.posts[req.params.postId].comments.push(newComment);

  res.status(201).send({ id: id });
});

router.put('/posts/:postId/comments/:commentId', (req, res) => {
  let postId = req.params.postId;
  let commentId = req.params.commentId;

  store.posts[postId].comments[commentId] = req.body;

  res.status(200).send(store.posts[postId].comments[commentId])
});

router.delete('/posts/:postId/comments/:commentId', (req, res) => {
  let postId = req.params.postId;
  let commentId = req.params.commentId;
  
  store.posts[postId].comments.splice(commentId, 1)

  res.status(204).send()
});

module.exports = router;
