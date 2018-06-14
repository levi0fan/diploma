const gulp = require('gulp');
const cssImport = require('gulp-cssimport');

const dir = '.';
const srcPath = `${dir}/src`;
const staticPath = `${dir}/static`;

const folders = {
  css: {
    src: `${srcPath}/styles/`,
    dist: `${staticPath}/css/`,
  },
  js: {
    src: `${srcPath}/js/`,
    dist: `${staticPath}/js/`,
  },
  img: {
    src: `${srcPath}/img/`,
    dist: `${staticPath}/img/`,
  },
};

gulp.task('css', function() {
    return gulp.src(`${folders.css.src}*.css`)
        .pipe(cssImport())
        .pipe(gulp.dest(folders.css.dist));
});

gulp.task('img', function() {
    return gulp.src(`${folders.img.src}*`)
        .pipe(gulp.dest(folders.img.dist));
});

gulp.task('watch', ['css', 'img'], function(){
    gulp.watch(`${folders.css.src}**/*.css`, ['css']);
    gulp.watch(`${folders.img.src}*`, ['img']);
});

gulp.task('default', ['css', 'img']);
