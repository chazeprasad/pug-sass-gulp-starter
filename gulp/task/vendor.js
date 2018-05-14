import fs from 'fs';
import path from 'path';
import gulp from 'gulp';


import config from '../config';


var packageData = JSON.parse(fs.readFileSync('./package.json'));
var vendorData = packageData.dependencies;
var vendorVersionList = Object.keys(vendorData).map((k) => vendorData[k])
var vendorList = Object.keys(vendorData).map((k) => config.path.vendor.src + '/'+k+"/**/*")

console.log('--vendorList--');
console.log(vendorList);

gulp.task('vendor', function () {
    return gulp.src(vendorList, { base: config.path.vendor.base })
        .pipe(gulp.dest(config.path.vendor.dest));
});
