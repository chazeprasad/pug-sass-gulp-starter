import config from '../config';
import gulp from 'gulp';

gulp.task('watch', ['browserSync'], function () {

    global.isWatching = true;

    // gulp.watch(config.scripts.src, ['eslint']).on('change', function (e) {
    //     console.log('File ' + e.path + ' has been changed. Transpiling..');
    // });

    gulp.watch(config.path.data.watch, ['pug']).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed. Updating..');
    });
    gulp.watch(config.path.pug.watch, ['lint-pug', 'pug']).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed. Updating..');
    });
    gulp.watch(config.path.sass.src, ['sass']).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed. Updating..');
    });
    gulp.watch(config.path.assets.src, ['assets']).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed. Updating..');
    });
    gulp.watch(config.path.html.src, ['html']).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed. Updating..');
    });


});
