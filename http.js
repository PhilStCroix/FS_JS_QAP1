// Import the HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a 200 status code and plain text content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write "Hello, World!" as the response body
  res.end('Hello, World!\n');
});

// Specify the port to listen on
const port = 3000;

// Start the server and log a message when it's running
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
