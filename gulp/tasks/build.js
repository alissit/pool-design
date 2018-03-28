var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var del = require("del");
var usemin = require("gulp-usemin");
var rev = require("gulp-rev");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var browserSync		= require("browser-sync").create();


gulp.task("previewDist", function(){
		browserSync.init({
		notify: false, /*stops the notify box from showing up*/
		server:{
			baseDir: "docs"
		}
	});
})

gulp.task("deleteDistFolder", function(){
	return del("./docs")
});


gulp.task("optimizeImages", ["deleteDistFolder"], function(){
	return gulp.src(["./app/assets/images/**/*"])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("useminTrigger", ["deleteDistFolder"], function(){
	gulp.start("usemin");
})

gulp.task("usemin", ["styles", "scripts"], function(){
	return gulp.src("./app/*.html")
	.pipe(usemin({
		css: [function(){return rev()}, function(){return cssnano()}],
		js: [function(){return rev()}, function(){return uglify()}]
	}))
	.pipe(gulp.dest("./docs"));
});



gulp.task("build", ["deleteDistFolder", "optimizeImages", "useminTrigger"]);