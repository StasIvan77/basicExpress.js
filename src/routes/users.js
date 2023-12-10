// src/routes/users.js
const express = require('express');
const router = express.Router();
const data = require('../data');
const middleware = require('../middleware');

let users = [];

// Middleware for request content validation
router.use(middleware.validateContent);

// Route to retrieve a list of all users
router.get('/', (req, res) => {
  res.json(data.users);
});

// Route to add a new user
router.post('/', (req, res) => {
    try {
      const newUser = req.body;
      users.push(newUser);
  
      res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route to retrieve a specific user by their email
router.get('/:email', (req, res) => {
  const userEmail = req.params.email;
  const user = data.users.find(u => u.email === userEmail);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Route to update a user's data
router.put('/:email', (req, res) => {
  const userEmail = req.params.email;
  const updatedData = req.body;
  const user = data.users.find(u => u.email === userEmail);
  if (user) {
    Object.assign(user, updatedData);
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Route to delete a user by their email
router.delete('/:email', (req, res) => {
  const userEmail = req.params.email;
  const userIndex = data.users.findIndex(u => u.email === userEmail);
  if (userIndex !== -1) {
    const deletedUser = data.users.splice(userIndex, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
