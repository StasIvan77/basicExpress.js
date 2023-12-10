// src/routes/articles.js
const express = require('express');
const router = express.Router();
const data = require('../data');

// Route to retrieve articles
router.get('/', (req, res) => {
  res.json(data.articles);
});

// Route to add a new article
router.post('/', (req, res) => {
  const newArticle = req.body;
  data.articles.push(newArticle);
  res.json(newArticle);
});

// Route to update article tags
router.put('/:articleName/tags', (req, res) => {
  const articleName = req.params.articleName;
  const updatedTags = req.body.tags;
  const article = data.articles.find(a => a.name === articleName);
  if (article) {
    article.tags = updatedTags;
    res.json(article);
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
});

module.exports = router;
