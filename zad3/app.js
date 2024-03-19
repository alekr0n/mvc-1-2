const http = require('http');
const routes = require('./routes/index');
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    routes.handleHome(req, res);
  } else if (req.url === '/student' && req.method === 'GET') {
    routes.handleStudent(req, res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});