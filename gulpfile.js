var gulp        = require('gulp');
var browserSync = require('browser-sync');
var jade        = require('gulp-jade');
var reload      = browserSync.reload;

/**
 * Compile jade files into HTML
 */
gulp.task('templates', function() {

    var YOUR_LOCALS = {};

    return gulp.src('./guides/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./preview/content/guides/'))
});

/**
 * Important!!
 * Separate task for the reaction to `.jade` files
 */
gulp.task('jade-watch', ['templates'], reload);

/**
 * Serve and watch the scss/jade files for changes
 */
gulp.task('default', ['templates'], function () {

    browserSync({server: './preview/'});

    gulp.watch('./guides/*.jade',      ['jade-watch']);
});
