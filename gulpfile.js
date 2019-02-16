const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('build:node', () => {
  return gulp.src('larg.js').pipe(minify({ noSource: true, ext: { min: '.min.js' } })).pipe(gulp.dest('dist'));
});