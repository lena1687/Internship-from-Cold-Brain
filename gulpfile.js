'use strict';

let path = require('path');

let gulp = require('gulp');
let gulpLoadPlugins = require('gulp-load-plugins');
let plugins = gulpLoadPlugins();

let LessAutoprefix = require('less-plugin-autoprefix');

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(plugins.less({
            paths: [ path.join(__dirname, 'less', 'includes') ],
            plugins: [new LessAutoprefix({ browsers: ['last 2 versions'] })]
        }).on('error', console.log))
        .pipe(plugins.concat('style.css'))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task