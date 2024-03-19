const http = require('http');
const fs = require('fs');
const path = require('path');

const home = require('./views/home');
const student = require('./views/student');

const PORT = 3000;

let studentData = {};

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(home.renderPage());
  } else if (req.url === '/student' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(student.renderPage(studentData));
  } else if (req.url === '/student' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const parsedBody = new URLSearchParams(body);
      studentData = {
        name: parsedBody.get('name'),
        lastname: parsedBody.get('lastname'),
        age: parsedBody.get('age'),
        gender: parsedBody.get('gender'),
        code: parsedBody.get('code'),
        studyField: parsedBody.get('studyField')
      };
      fs.writeFile(path.join(__dirname, 'data', `${studentData.code}.txt`), body, err => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('Error saving data');
          return;
        }
        res.writeHead(302, { 'Location': '/student' });
        res.end();
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});