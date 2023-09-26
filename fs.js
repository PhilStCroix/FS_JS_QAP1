// Import the File System module
const fs = require('fs');

// Read a file named 'sample.txt' with UTF-8 encoding
fs.readFile('test.txt', 'utf8', (err, data) => {
  // Check for errors while reading the file
  if (err) {
    console.error(err);
    return;
  }

  // Log a message and display the file contents
  console.log('File contents:');
  console.log(data);
});
