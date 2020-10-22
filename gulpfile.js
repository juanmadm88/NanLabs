const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const nodemon = require("gulp-nodemon");
gulp.task("compile", () => {
	return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});
gulp.task("start", () => {
	const stream = nodemon({
		exec: "node --inspect=7001 dist/server.js",
		// script: config.server.src,
		ext: "js",
		env: {
			ENV: "DEV",
			PORT: 8081,
			KEY_API_TRELLO: "8a8ec11f17a483f01f24feafd50e10c8",
			TOKEN_TRELLO: "9b17b2a2d5189dc4df213ea95a29a3d79d113d8d4ac1e0c6ab7427ad89e75afc",
			TRELLO_BASE_URL: "https://api.trello.com/1",

		},
	});
	stream
		.on("restart", () => {
			console.log("restarted!");
		})
		.on("crash", () => {
			console.error("Application has crashed!\n");
			stream.emit("restart", 10); // restart the server in 10 seconds
		});
});
gulp.task("develop", gulp.series("compile", "start"));