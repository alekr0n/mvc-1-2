const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Strona główna' });
});

router.get('/student', (req, res) => {
  res.render('student', { title: 'Strona studenta' });
});

module.exports = router;