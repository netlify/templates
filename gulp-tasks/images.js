var project     = require('./_project.js');
var os          = require("os");
var gulp        = require('gulp');
var parallel    = require("concurrent-transform");
var rename      = require("gulp-rename");
var imageResize = require('gulp-image-resize');



// create a set of resize tasks at defined image widths
var resizeImageTasks = [];
[200,400,1000].forEach(function(size) {
  var resizeImageTask = 'resize_' + size;
  gulp.task(resizeImageTask, function() {
    gulp.src(project.buildSrc + '/images/previews/*')
    .pipe(parallel(
      imageResize({ width : size }),
      os.cpus().length
    ))
    .pipe(rename(function (path) { path.basename += "-" + size; }))
    .pipe(gulp.dest(project.buildDest+ '/images/previews'));
  });
  resizeImageTasks.push(resizeImageTask);
});


// Copy our core images to the dist folder, and resize all preview images
gulp.task('images', resizeImageTasks, function(cb) {
  return gulp.src(project.buildSrc + '/images/*')
    .pipe(gulp.dest(project.buildDest+ '/images'));
});

