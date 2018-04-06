var http = require("http");
var roots = require("./roots.js");

http.createServer(function(request, response){
    roots.home(request, response);
    roots.user(request, response);
}).listen(3000);