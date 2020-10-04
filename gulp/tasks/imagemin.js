const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function imageMinify() {
  return gulp.src('src/img/**')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      })
    ]))
    .pipe(gulp.dest('build/img'))
}