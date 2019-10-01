module.exports = {
  getPosts(req, res) {
    app.get('/posts', (req, res) => {
      res.send('getting posts');
    });
  },

  addPost(req, res) {
    app.post('/posts', (req, res) => {

    });
  },

  updatePost(req, res) {
    app.put('/posts/:postId/', (req, res) => {

    });
  },

  removePost(req, res) {
    app.delete('/posts/:postId/', (req, res) => {

    });
  }
}
