"use strict";

var server = require("../src/server/server.js");

exports.testNothing = function  (test) {
	test.equals(3, server.number(), "numbers not the same");
	test.done();
};