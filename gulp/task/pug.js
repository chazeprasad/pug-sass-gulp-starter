import config from '../config';
import gulp from 'gulp';
import fs from 'fs';
import path from 'path';
import data from 'gulp-data';
import pug from 'gulp-pug';
import prefix from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */


gulp.task('pug', function () {
    let locals = null;

    return gulp.src(config.path.pug.src)
        .pipe(data(function (file) {
            console.log(file.path)
            // return require('../.' + config.path.data.src + '/' + path.basename(file.path) + '.json');
            return JSON.parse(fs.readFileSync('./' + config.path.data.src + '/' + path.basename(file.path).replace('.pug','') + '.json'));
        }))
        .pipe(pug({
            pretty: true,
            locals: locals
        }))
        .on('error', function (err) {
            process.stderr.write(err.message + '\n');
            this.emit('end');
        })
        .pipe(gulp.dest(config.path.pug.dest))
        .pipe(browserSync.stream());
});
