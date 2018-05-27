const gulp = require('gulp');
const cssImport = require('gulp-cssimport');

gulp.task('css', function() {
    return gulp.src('styles/*.css')
        .pipe(cssImport())
        .pipe(gulp.dest('static/styles'));
})

gulp.task('default', ['css'])