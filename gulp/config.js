const src = './src';
const dest = './dist';

export default {

    browserPort: 3000,
    UIPort: 3001,
    testPort: 3002,

    path: {
        app: {
            src: src,
            dest: dest
        },
        data: {
            src:'./src/data',
            watch: ['./src/data/**/*']
        },
        assets: {
            src: ['./src/assets/**/*'],
            dest: dest + '/assets'
        },
        pug: {
            src: ['./src/template/page/**/*.pug' ],
            dest: dest,
            watch: ['./src/**/*.pug'],
            lint: ['./src/**/*.pug']
        },
        html: {
            src: ['./src/html/**/*.html' ],
            dest: dest,
            watch: ['./src/html/**/*.html']
        },
        sass: {
            src: ['./src/sass/**/*.scss'],
            dest: dest + '/assets/css',
            watch: ['./src/sass/**/*.scss']
        },
        vendor: {
            src: './node_modules',
            dest: dest + '/vendor',
            base: 'node_modules'

        }
    },
    assetExtensions: [
        'js',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff2?'
    ],

    init: function () {


        return this;
    }

}.init();
