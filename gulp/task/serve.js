import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('serve', ['clean'], function (cb) {
    global.isProd = false;
    runSequence('assets', 'html','lint-pug', ['sass', 'pug', 'vendor'], 'watch', cb);

});
