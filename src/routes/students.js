// src/routes/students.js
const express = require('express');
const router = express.Router();
const data = require('../data');

// Route to retrieve student statistics
router.get('/', (req, res) => {
  res.json(data.students);
});

// Route to find students with the worst score for homework
router.get('/worst-homework', (req, res) => {
  const studentsWithWorstHomework = data.students.filter(student =>
    student.scores.some(score => score.type === 'homework' && score.score < 50)
  );
  res.json(studentsWithWorstHomework);
});

module.exports = router;
