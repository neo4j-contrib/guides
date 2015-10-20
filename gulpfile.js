var gulp        = require('gulp');
var browserSync = require('browser-sync');
var jade        = require('gulp-jade');
var reload      = browserSync.reload;

/**
 * Compile jade files into HTML
 */
gulp.task('build', function() {

    var YOUR_LOCALS = {};

    return gulp.src('./guides/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./dist/'))
});
gulp.task('preview', ['build'], function() {
   return gulp.src('./dist/*')
       .pipe(gulp.dest('./preview/content/guides/'))
});

/**
 * Important!!
 * Separate task for the reaction to `.jade` files
 */
gulp.task('jade-watch', ['preview'], reload);

/**
 * Serve and watch the scss/jade files for changes
 */
gulp.task('default', ['preview'], function () {

    browserSync({server: './preview/'});

    gulp.watch('./guides/*.jade',      ['jade-watch']);
});
