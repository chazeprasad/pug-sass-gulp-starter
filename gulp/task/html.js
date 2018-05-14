import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';

import browserSync from 'browser-sync';

gulp.task('html', function () {
    return gulp.src(config.path.html.src)
        .pipe(changed(config.path.html.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.path.html.dest))
        .pipe(browserSync.stream());
});
