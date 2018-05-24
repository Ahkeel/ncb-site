var gulp = require('gulp');
var ejs = require('gulp-ejs');
var scss = require('gulp-scss');
var sass = require('gulp-sass');
var css = require('gulp-css');
var browserSync = require('browser-sync').create();


gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(ejs())
    .pipe(gulp.dest('build'))
});

gulp.task('css', function(){
  return gulp.src('src/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css/'))
});

gulp.task('watch', function(){
		livereload.listen();
  gulp.watch('src/sass/*.css', ['css']); 
  gulp.watch('src/*.html', ['html']); 
})

gulp.task('serve', ['html', 'css'], function() {

    browserSync.init({
        server: "./build"
    });

    gulp.watch("src/**/*.html", ['html']);
    gulp.watch("src/sass/*.css", ['css']);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);