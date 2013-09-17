"use strict";

var http = require("http");
var server = http.createServer();

server.on("request", function  (request, response) {
	console.log("Req received");

	var body ="<html><head><title>Node http</title></head><body><p>this is a node server</p></body></html>";
	response.end(body);
})

server.listen(8080);
console.log("server started!");