const express = require('express');
const Comment = require('../models/comment');

const router = express.Router();

// Get all comments
router.get('/', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

// Get comment by ID
router.get('/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  res.json(comment);
});

// Create comment
router.post('/', async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.json(comment);
});

// Update comment
router.put('/:id', async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(comment);
});

// Delete comment
router.delete('/:id', async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Comment deleted' });
});

module.exports = router;