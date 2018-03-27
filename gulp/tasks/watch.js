var gulp 			= require("gulp"), //brings in the gulp files
	watch 			= require("gulp-watch"),//brings in gulp-watch
	browserSync		= require("browser-sync").create();//only want the create aspect of browser-sync


gulp.task("watch", function(){

		browserSync.init({
			notify: false, /*stops the notify box from showing up*/
			server:{
				baseDir: "app"
			}
		});

		watch("./app/content/*.html", function(){
			gulp.start("headerfooter")
			console.log("watching html")
			browserSync.reload();
		});

		watch("./app/assets/styles/**/*.css", function(){
			console.log("watching styles")
			gulp.start("cssInject");
		});

		watch("./app/assets/scripts/App.js", function(){
			console.log("watching scripts")
			gulp.start("scriptsRefresh");
		});
});

gulp.task("cssInject", ["styles"], function(){
	return gulp.src("./app/temp/styles/styles.css")
		.pipe(browserSync.stream());
});

gulp.task("scriptsRefresh",["scripts"], function(){
		browserSync.reload();
});
