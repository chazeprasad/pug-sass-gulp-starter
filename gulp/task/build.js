import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], function (cb) {
    global.isProd = true;
    runSequence('assets', 'html', 'lint-pug', ['sass', 'pug', 'vendor'], cb);


});
