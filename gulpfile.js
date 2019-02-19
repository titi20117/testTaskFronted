// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // all the package.json plugins

// Variables de chemins
var source = './public/src'; // dossier de travail
var destination = './public'; // dossier à livrer

gulp.task('css', function () {
    return gulp.src(source + '/assets/css/styles.less')
      .pipe(plugins.less())
      .pipe(gulp.dest(destination + '/css/'));
});