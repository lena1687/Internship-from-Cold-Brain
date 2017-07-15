'use strict';

let path = require('path');

let gulp = require('gulp');
let gulpLoadPlugins = require('gulp-load-plugins');
let plugins = gulpLoadPlugins();

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(plugins.less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }).on('error', function(e) { this.emit('end'); console.log(e); }))
        .pipe(plugins.concat('style.css'))
        .pipe(plugins.autoprefixer({
            browsers: [
                'last 3 versions',
                'iOS >= 8',
                'Safari >= 8'
            ],
            cascade: false
        }).on('error', function(e) { this.emit('end'); console.log(e); }))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['less', 'watch']); // Default will run the 'entry' watch task