module.exports = {
  getComments(req, res) {
    app.get('/posts/:postId/comments', (req, res) => {

    });
  },

  addComment(req, res) {
    app.post('/posts/:postId/comments', (req, res) => {

    });
  },

  updateComment(req, res) {
    app.put('/posts/:postId/comments/commentId', (req, res) => {

    });
  },

  removeComment(req, res) {
    app.delete('/posts/:postId/comments/commentId', (req, res) => {

    });
  }
}
