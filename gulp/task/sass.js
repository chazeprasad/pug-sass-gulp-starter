import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';

import config from '../config';


gulp.task('sass', function () {
    return gulp.src(config.path.sass.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', notify.onError(function (error) {
            return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
        })))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        // .pipe(rename('app.css'))
        .pipe(gulp.dest(config.path.sass.dest))
        .pipe(notify({ message: 'SASS Compiled' }))
        .pipe(browserSync.stream());
});
