import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';

import browserSync from 'browser-sync';

gulp.task('assets', function () {
    return gulp.src(config.path.assets.src)
        .pipe(changed(config.path.assets.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.path.assets.dest))
        .pipe(browserSync.stream());
});
