var http = require('http');
var fs = require('fs');

var hostname = '192.168.254.157';
var port = 8000;

var server = http.createServer((req, res) => {
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

document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});
