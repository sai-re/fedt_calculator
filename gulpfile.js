var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
    gulp.src('./app/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', function() {
    gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watchCSS',function() {
    gulp.watch('./app/*.scss', ['styles']);
});

gulp.task('watchHTML',function() {
    gulp.watch('./app/*.html', ['html']);
});

gulp.task('default', ['watchCSS', 'watchHTML']);