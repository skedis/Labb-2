const express = require('express');
const router = express.Router();

const commentsRoutes = require('./comments');
const postsRoutes = require('./posts');

// Kopplar alla routes till samma router
router.use(postsRoutes);
router.use(commentsRoutes);

// Exporterar routern för användning i app.js
module.exports = router;
