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
  const studentData = {
    firstName,
    lastName,
    age,
    gender,
    code,
    studyField
  };
  console.log('Dane formularza:', req.body);
  res.redirect('/');

  fs.writeFile(`${code}.txt`, JSON.stringify(studentData), (err) => {
    if (err) throw err;
    console.log('Dane zostały zapisane do pliku.');
  });

  res.render('student', { title: 'Student profile', studentData });
});