const handler = require('serve-handler');
const http = require('http');

const port = process.env.port || 3000

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});