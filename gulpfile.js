var gulp = require('gulp'),
	sh = require('gulp-shell'),
	minifyHtml = require('gulp-minify-html'),
	bs = require('browser-sync'),
	reload = bs.reload;



gulp.task('watchAll', function(){
	//gulp.watch(['./**/*.js',  '!./node_modules/**'], ['webpack']);
	gulp.watch('./app/*.html', ['html']);
});

gulp.task('html', function(){
	gulp.src('./app/*.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('./transpiled'));
});

gulp.task('webpack', sh.task(['webpack']));

gulp.task('default', ['watchAll']);