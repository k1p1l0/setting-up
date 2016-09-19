'use strict';

const FINAL_FOLDER = 'dist';

let gulp = require('gulp'),
		less = require('gulp-less'),
		rimraf = require('rimraf'),
		path;

path = {
    build: {
        html: FINAL_FOLDER,
        css: `${FINAL_FOLDER}/css`
    },
    src: {
        html: 'src/*.html', 
        js: 'src/js/main.js',
        style: 'src/less/main.less',
        bootstrap: './src/less/bootstrap-layout/bootstrap.less',
        img: 'src/image/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.less',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: FINAL_FOLDER
};

gulp.task('bootstrap' , function() {
    return gulp.src(path.src.bootstrap)
	    .pipe(less())
	    .pipe(gulp.dest(path.build.css));
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});