var gulp = require('gulp'),
 	webpack = require('webpack'),
	webpackConfig = require('./webpack.config'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	clean = require('gulp-clean'),
	autoprefixer = require('gulp-autoprefixer'),
	gulpSequence = require('gulp-sequence'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin');

gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
})

gulp.task('css', function(){
	return gulp.src('css/**/*.css')
		.pipe(minifycss())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('dist/css/'));
})

gulp.task('webpack', function(callback){
	webpack(webpackConfig, (err, stats) => {
		callback();
	})
})

gulp.task('imagemin',function(){
	return gulp.src('images/**/*.{jpg,png}')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/'))
})

gulp.task('clean', function(){
	return gulp.src(['dist','css'], {read: false})
		.pipe(clean());
})

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(['scss/**/*.scss'],['sass']);
	gulp.watch(['css/**/*.css'],['css']);
	gulp.watch(['js/**/*.js'],['webpack']);
	gulp.watch(['dist/**/*.*'],function(){
		livereload.changed('index.html');
	})
})

gulp.task('default', gulpSequence('clean','imagemin','sass','css','webpack','watch'))
