const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/index');
const bodyParser = require('body-parser');

app.set('port', PORT);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('home', { title: 'Strona główna' });
});

app.get('/student', (req, res) => {
  res.render('student', { title: 'Strona studenta' });
});

app.set('views', './views');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.post('/student', (req, res) => {
  const { firstName, lastName, age, gender, code, studyField } = req.body;
  console.log('Dane formularza:', req.body);
  res.redirect('/');
});
