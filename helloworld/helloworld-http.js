var http = module.require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World");
});

server.listen(3000);

console.log ("Server running on port 3000 localhost");
