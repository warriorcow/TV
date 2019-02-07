var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
    autoprefixer = require('gulp-autoprefixer');
    rigger = require('gulp-rigger');
    wait = require('gulp-wait')


// Build HTML
gulp.task('html', function(){
  gulp.src('app/*.html')
  .pipe(rigger())
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream: true}))
});


// Build CSS
gulp.task('sass', function(){
  gulp.src('app/scss/style.scss')
    .pipe(wait(1000))
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}))
});


// AutoRefresh
gulp.task('browser-sync', function(){
    browserSync({
      server: {
        baseDir: 'dist',
        index: "index.html"
      },
      notify: false
    });
});



gulp.task('watch', ['browser-sync', 'html', 'sass'], function(){
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/template/*.html', ['html']);
});
