/*jshint node: true */
'use strict';

var gulp = require('gulp');

require('enigma-static-build')(gulp, __dirname);

gulp.task('default', [ 'enigma.default' ]);
gulp.task('build', [ 'enigma.build' ]);
gulp.task('clean', [ 'enigma.clean' ]);
gulp.task('develop', [ 'enigma.develop' ]);
