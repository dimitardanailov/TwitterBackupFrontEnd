// Resource: http://webpack.github.io/docs/usage-with-gulp.html
// https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const webpackConfig = require('./webpack.config.js');

// Imagemin
import gulpimagemin from 'gulp-imagemin';
import imageminpngquant from 'imagemin-pngquant';

// The development server (the recommended option for development)
gulp.task('default', ['webpack-dev-server']);

/*
 * Build and watch cycle (another option for development)
 * Advantage: No server required, can run app from filesystem
 * Disadvantage: Requests are not blocked until bundle is available,
 * can serve an old app on refresh.
 */
gulp.task('build-dev', ['webpack:build-dev'], function() {
	gulp.watch(["client/**/*"], ["webpack:build-dev"]);
});

// Production build
gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', function(callback) {
	// run webpack
	webpack(webpackConfig, function(error, stats) {
		if(error) { 
			throw new gutil.PluginError('webpack:build', error);
		}

		gutil.log('[webpack:build]', stats.toString({
			'colors': true
		}));
		callback();
	});
});

// Update development configurations
const myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'sourcemap';
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
const devCompiler = webpack(myDevConfig);

gulp.task('webpack:build-dev', function(callback) {
	// run webpack
	devCompiler.run(function(error, stats) {
		if(error) {
			throw new gutil.PluginError('webpack:build-dev', error);
		}

		gutil.log('[webpack:build-dev]', stats.toString({
			'colors': true
		}));
		callback();
	});
});

gulp.task('webpack-dev-server', ['build-dev'], function(callback) {
	// Modify development configurations
	const myConfig = webpackConfig;
	myConfig.devtool = 'eval';
	myConfig.debug = true;

	// Our server will run on specific port
	const port = 9000;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), webpackConfig.devServer).listen(port, 'localhost', function(err) {
		if(error) {
			throw new gutil.PluginError('webpack-dev-server', error);
		}

		const gutilMessage = `http://localhost:${port}/webpack-dev-server/`;
		gutil.log('[webpack-dev-server]', gutilMessage);
	});
});

// Imagemin is library for minify images
gulp.task('imagemin:build', function() {
	return gulp.src('client/assets/images/src/*')
        .pipe(gulpimagemin({
            'progressive': true,
						// svgoPlugins - https://github.com/svg/svgo
            'svgoPlugins': [{ 'removeViewBox': false}],
            'use': [imageminpngquant()]
        }))
        .pipe(gulp.dest('client/assets/images/dist'));
});
