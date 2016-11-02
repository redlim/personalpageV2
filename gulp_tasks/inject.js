const gulp = require('gulp');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const angularFilesort = require('gulp-angular-filesort');
const gulpInject = require('gulp-inject');

const conf = require('../conf/gulp.conf');

gulp.task('inject', inject);

gulp.task('copyfonts',copyfonts);

gulp.task('copyWillImage',copyWillImage);

function inject() {
  const injectStyles = gulp.src(conf.path.src('**/*.css'), {read: false});
  const injectScripts = gulp.src([
    conf.path.tmp('**/*.js'),
    `!${conf.path.tmp('**/*.spec.js')}`
  ])
  .pipe(angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  const injectOptions = {
    ignorePath: [conf.paths.src, conf.paths.tmp],
    addRootSlash: false
  };

  return gulp.src(conf.path.src('index.html'))
    .pipe(gulpInject(injectStyles, injectOptions))
    .pipe(gulpInject(injectScripts, injectOptions))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(gulp.dest(conf.paths.tmp))
    .pipe(browserSync.stream());
}

function copyfonts() {
  return gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,woff2}')
      .pipe(gulp.dest('./dist/fonts'));
};

function copyWillImage() {
  return gulp.src('./src/app/img/will.jpg')
      .pipe(gulp.dest('./dist/styles/app/img/'));
};