const home = require('../views/home');
const student = require('../views/student');

function handleHome(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(home.renderPage());
}

function handleStudent(req, res) {

}

module.exports = {
  handleHome,
  handleStudent
};