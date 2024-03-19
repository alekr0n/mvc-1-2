const express = require('express');
const app = express();
const PORT = 3000;

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

app.engine('html', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    var rendered = content.toString().replace(/NAZWA_PLIKU/g, options.title);
    return callback(null, rendered);
  });
});
