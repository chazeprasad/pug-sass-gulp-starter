import fs from 'fs';
import gulp from 'gulp';
import onlyScripts from './util/scriptFilter';

const taskList = fs.readdirSync('./gulp/task/').filter(onlyScripts);

// Ensure process ends after all Gulp tasks are finished
gulp.on('stop', function () {
    if (!global.isWatching) {
        process.nextTick(function () {
            process.exit(0);
        });
    }
});

taskList.forEach((task) => {
    require('./task/' + task);
});
