const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const gulpLivereload = require('gulp-livereload')

gulp.task('watch', () => {
  gulpLivereload.listen()
  gulp.watch('src/scss/**/*.scss', ['make'])
  gulp.watch('src/*.html', ['make'])
})

gulp.task('make', () => {
  gulp.src('src/*.html')
      .pipe(gulpLivereload())

  gulp.src('src/scss/**/*.scss')
      .pipe(gulpSass())
      .pipe(gulp.dest('src/css'))
      .pipe(gulpLivereload())
})
