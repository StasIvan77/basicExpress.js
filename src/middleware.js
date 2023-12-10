const express = require('express');

// Application-level middleware for request logging
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
};

const validateContent = (req, res, next) => {
  const requiredProps = ['firstName', 'lastName', 'email', 'password', 'age', 'address', 'createdAt', 'tags'];

  const isValid = requiredProps.every(prop => req.body.hasOwnProperty(prop));

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid request content. Check required properties.' });
  }

  next();
};

module.exports = { requestLogger, errorHandler, validateContent };