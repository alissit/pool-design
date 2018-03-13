var gulp			= require("gulp"),
	watch			= require("gulp-watch"),
	browserSync		= require("browser-sync").create();



gulp.task("watch", function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch("./app/index.html", function(){
		console.log("watching html")
		browserSync.reload();
	});

	watch("./app/assets/styles/**/*.css", function(){
		console.log("watching styles")
		gulp.start("cssInject");	
	});

	watch("./app/assets/scripts/**/*.js", function(){
		console.log("watching javascript")
		gulp.start("scriptsRefresh");
	});
});

gulp.task("cssInject", ["styles"], function(){
	return gulp.src("./app/temp/styles/styles.css")
		.pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], function(){
	browserSync.reload();
});

