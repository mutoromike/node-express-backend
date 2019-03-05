const http = require('http');
// require function used to manage dependencies of your program

const server = http.createServer((req, res) => {  // creates a server constant: taking request and response objects as variables
  res.end('Hello Human\n');
});

// Runs the server, returning the response to the request
server.listen(4242, () => {
  console.log('Server is running...');
});
