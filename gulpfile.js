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

gulp.task('sass', function(){
  return gulp.src('src/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css/'))
});

gulp.task('css', function(){
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css/'))
});

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js/'))
});

gulp.task('img', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('build/images'))
});

gulp.task('watch', function(){
  gulp.watch('src/sass/*.css', ['css']); 
  gulp.watch('src/*.html', ['html']); 
})

gulp.task('serve', ['html', 'sass', 'css', 'js', 'img'], function() {

    browserSync.init({
        server: "./build"
    });

    gulp.watch("src/**/*.html", ['html']);
    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch("src/css/*.css", ['css']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/images/**/*", ['img']);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);