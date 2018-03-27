var gulp = require('gulp');
var headerfooter = require('gulp-headerfooter');
 
gulp.task('headerfooter', function () {
    gulp.src('./app/content/*.html')
        .pipe(headerfooter.header('./app/partials/header.html'))
        .pipe(headerfooter.footer('./app/partials/footer.html'))
        .pipe(gulp.dest('./app/'));
});