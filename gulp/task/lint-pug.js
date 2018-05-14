import config from '../config';
import gulp from 'gulp';
import pugLinter from 'gulp-pug-linter';

var myReporter = function (errors) {
    if (errors.length) {
        console.error('It broke!')
    }
}


gulp.task('lint-pug', function () {
    return gulp
        .src(config.path.pug.lint)
        .pipe(pugLinter())
        .pipe(pugLinter.reporter('fail'))
});
