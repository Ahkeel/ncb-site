var gulp = require('gulp');
var ejs = require('gulp-ejs');
var scss = require('gulp-scss');
var css = require('gulp-css');


gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(ejs())
    .pipe(gulp.dest('build'))
});

gulp.task('css', function(){
  return gulp.src('src/sass/*.css')
    .pipe(css())
    .pipe(gulp.dest('build/css'))
});