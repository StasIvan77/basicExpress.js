// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON in request body
app.use(middleware.requestLogger); // Application-level middleware for request logging

// Routes
app.use('/users', require('./routes/users'));
app.use('/students', require('./routes/students'));
app.use('/articles', require('./routes/articles'));

// Error-handling middleware
app.use(middleware.errorHandler);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js API!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;