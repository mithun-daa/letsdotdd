/*global desc, task, jake, fail, complete */
(function  () {

	"use strict";

	task("default", ["lint", "test"]);

	desc("Lint everything");
	task("lint", function () {
		var lint = require("./build/lint/lint_runner.js");
		var files = new jake.FileList();
		files.include("**/*.js");
		files.exclude("node_modules");
		files.exclude("build");
		var passed = lint.validateFileList(files.toArray(), nodeLintOptions(), {});
		if(!passed) fail("Lint failed");
	});

	desc("Test everything");
	task("test", function () {
		console.log("tests go here");
	});

	function nodeLintOptions () {
		return {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true,
			node: true
		};
	}
})();