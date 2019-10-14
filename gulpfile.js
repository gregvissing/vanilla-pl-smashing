var gulp = require("gulp");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
var autoprefixer = require("gulp-autoprefixer");
var run = require("gulp-run");

var paths = {
	styles: {
		src: "source/css/style.scss",
		dest: "public/css/"
	}
};

function servePatternLab() {
	run("npm run pl:serve").exec();
}

/*
 * Define our tasks using plain functions
 */
function styles() {
	return gulp
		.src(paths.styles.src)
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(gulp.dest(paths.styles.dest));
}

function watch() {
	gulp.watch("source/**/*", styles);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(gulp.parallel([styles]));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.styles = styles;
exports.watch = watch;
exports.build = build;

exports.default = gulp.series([styles, watch]);
