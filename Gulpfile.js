var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');


gulp.task('styles', function(){
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});

gulp.task('default', function(){
    gulp.watch('scss/**/*.scss', ['styles']);
    livereload.listen();
});