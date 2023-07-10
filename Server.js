const http = require('http');
const fs = require('fs');

const hostname = '192.168.254.157';
const port = 8000;

const server = http.createServer((req, res) => {
  fs.readFile('/opt/Javascript/JavaScript-Application/index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});