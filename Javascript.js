var http = require('http');

var hostname = '192.168.254.157';
var port = 8000;

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});