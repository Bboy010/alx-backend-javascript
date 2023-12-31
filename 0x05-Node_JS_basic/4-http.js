/**
 * Task 4. simple HTTP server using Node's HTTP module
 * create a small HTTP server using the http module
 */

const http = require('http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server running at http://${hostname}:${port}\n`);
});

module.exports = app;
