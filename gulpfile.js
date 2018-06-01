
var gulp        = require('gulp');
var shell       = require('gulp-shell');
var runSequence = require('run-sequence');

/**
 * Our gulp tasks live in their own files,
 * for the sake of clarity
 */
require('require-dir')('./gulp-tasks');


/*
  Let's build this sucker.
*/
gulp.task('build', function(callback) {
  runSequence(
    ['generate', 'images', 'styles'],
    callback
  );
});


/*
  Let's build this sucker, without getting data from online sources
*/
gulp.task('build:local', function(callback) {
  runSequence(
    ['clean-build'],
    ['generate', 'images', 'styles'],
    callback
  );
});


/*
 Run our static site generator to build the pages
*/
gulp.task('generate', shell.task('eleventy'));
