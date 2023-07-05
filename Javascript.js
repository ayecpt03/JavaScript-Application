const http = require('http');
const port = 3000; // Port number

const server = http.createServer((req, res) => {
  // Request handling logic
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function displayMessage() {
    var messageElement = document.getElementById("message");
    messageElement.textContent = "Hello, World!";
}