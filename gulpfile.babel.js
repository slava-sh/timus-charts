import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();

gulp.task('content_scripts', () => {
    return gulp.src([
        'metadata.js',
        'compat.js',
        'styles.js',
        'locales.js',
        'templates.js',

        'submit.js',
        'author.js',
        'line.js',
        'chart.js',

        'content.js',
    ], {'cwd': 'app/content_scripts'})
        .pipe($.concat('timus.user.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('extras', () => {
    return gulp.src([
        'app/*.js',
        'app/*.json',
        'app/*.png',
    ], {'base': 'app'})
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', cb => del(['dist'], cb));

gulp.task('build', ['content_scripts', 'extras']);

gulp.task('default', ['clean'], cb => runSequence('build', cb));
