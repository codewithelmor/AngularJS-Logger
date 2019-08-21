/// <binding AfterBuild='minify-js-spa,minify-css-spa,minify-js,minify-css' />

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var cleanCss = require('gulp-clean-css');

var jsSpaFiles = 'public/spa/**/*.js';
var minJsSpaFiles = 'public/spa/**/*.min.js';

var cssSpaFiles = 'public/spa/**/*.css';
var minCssSpaFiles = 'public/spa/**/*.min.css';

var jsFiles = 'public/assets/js/*.js';
var minJsFiles = 'public/assets/js/*.min.js';

var cssFiles = 'public/assets/css/*.css';
var minCssFiles = 'public/assets/css/*.min.css';

gulp.task('minify-js', function () {
    // place code for your minify-js task here

    //to ignore minified (exclude from source but need to over write)
    return gulp.src([jsFiles, '!' + minJsFiles])
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }))
    .pipe(notify({
        message: 'JS minification task complete!',
        onLast: true
    }));
});

gulp.task('minify-js-spa', function () {
    // place code for your minify-js-spa task here

    //to ignore minified (exclude from source but need to over write)
    return gulp.src([jsSpaFiles, '!' + minJsSpaFiles])
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }))
        .pipe(notify({
            message: 'JS SPA minification task complete!',
            onLast: true
        }));
});

gulp.task('minify-css', function () {
    // place code for your minify-css task here

    //to ignore minified (exclude from source but need to over write)
    return gulp.src([cssFiles, '!' + minCssFiles])
        .pipe(cleanCss())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }))
        .pipe(notify({
            message: 'CSS minification task complete!',
            onLast: true
        }));
});

gulp.task('minify-css-spa', function () {
    // place code for your minify-css-spa task here

    //to ignore minified (exclude from source but need to over write)
    return gulp.src([cssSpaFiles, '!' + minCssSpaFiles])
        .pipe(cleanCss())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }))
        .pipe(notify({
            message: 'CSS SPA minification task complete!',
            onLast: true
        }));
});