var gulp = require('gulp'),
	del = require('./node_modules/del'),
	notify = require('./node_modules/gulp-notify');

gulp.task('default', ['clean'], function() {
	gulp.start('copy');
});

gulp.task('clean', function(cb) {
	del('./responsive/js/libs', cb);
});

gulp.task('copy', function(){
	gulp.src(['./node_modules/grunt/node_modules/lodash/lodash.min.js',
	 './node_modules/ractive/ractive.min.js', './node_modules/ractive-touch/index.js',
	 './node_modules/ractive-events-keys/dist/ractive-events-keys.min.js'])
	.pipe(gulp.dest('./responsive/js/libs'))
	.pipe(notify({ message: 'Files copied' }));
});
