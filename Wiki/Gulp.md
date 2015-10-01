# Gulp Guide

### Table of Contents
  1. [Gulp](#gulp)
  1. [Gulp Util](#gulp-util)
	1. [Gulp Imagemin](#gulp-imagemin)
	1. [Gulp ng config](#gulp-ng-config)
	1. [Gulp notify](#gulp-notify)
	1. [Yargs](#args)
	1. [Sources](#sources)

### Gulp

We use gulp and webpack together. Resources: 
	1. Please `Wiki - Webpack` guide for more information. 
	1. [Webpack - USAGE WITH GULP](http://webpack.github.io/docs/usage-with-gulp.html)
	1. [Webpack with some common libraries](https://github.com/webpack/webpack-with-common-libs)

> Build system automating tasks: minification and copying of all JavaScript files, static images, capable of watching files to automatically rerun the task when a file is changed. 

#### Install gulp globally:

```bash
$ npm install gulp --global 
```

#### Install gulp in your project devDependencies:

```bash
$ npm install gulp --save-dev 
```

#### Usage

```javascript
import gulp from 'gulp';

gulp.task('default', function() {
	// Place code for you default task here.
});
```

#### Run

```bash
$ gulp
```

**[⬆ back to top](#table-of-contents)**

### Gulp Util

> Utility functions for gulp plugins

#### Install

```bash
$ npm install gulp-util --save-dev 
```

#### Usage

```javascript
import gulp from 'gulp';
import gutil from 'gulp-util';
 
gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));
gutil.beep();
 
gutil.replaceExtension('file.coffee', '.js'); // file.js 
 
var opt = {
  name: 'todd',
  file: someGulpFile
};
gutil.template('test <%= name %> <%= file.path %>', opt) // test todd /js/hi.js 
```

**[⬆ back to top](#table-of-contents)**

### Gulp Imagemin

> Minify PNG, JPEG, GIF and SVG images with imagemin

#### Install

```bash
$ npm install --save-dev imagemin-pngquant # imagemin pngquant
$ npm install --save-dev gulp-imagemin # gulp imagemin
```

#### Usage

```javascript
import gulp from 'gulp';
import gutil from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

gulp.task('default', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});
```

**[⬆ back to top](#table-of-contents)**

### Gulp ng config

> It's often useful to generate a file of constants, usually as environment variables, for your Angular apps. This Gulp plugin will allow you to provide an object of properties and will generate an Angular module of constants.

#### Install

```bash
$ npm install --save-dev gulp-ng-config
```

#### Usage

```javascript
import gulp from 'gulp';
import gulpNgConfig from 'gulp-ng-config';

gulp.task('test', function () {
  gulp.src('configFile.json')
		.pipe(gulpNgConfig('myApp.config'))
		.pipe(gulp.dest('.'))
});
```

**[⬆ back to top](#table-of-contents)**

### Gulp notify

> Gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module. Fallbacks to Growl or simply logging

#### Install

```bash
$ npm install --save-dev gulp-notify
```

#### Usage

```javascript
import gulp from 'gulp';
import notify from 'gulp-notify';

gulp.src("../test/fixtures/*")
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(through(function () {
		this.emit("error", new Error("Something happend: Error message!"))
	}));
```

**[⬆ back to top](#table-of-contents)**

### Yargs

> Yargs be a node.js library fer hearties tryin' ter parse optstrings. With yargs, ye be havin' a map that leads straight to yer treasure! Treasure of course, being a simple option hash.

#### Install

```bash
$ npm install yargs
```

**[⬆ back to top](#table-of-contents)**

### Sources:
  1. [Gulp](http://gulpjs.com/)
	1. [Webpack - USAGE WITH GULP](http://webpack.github.io/docs/usage-with-gulp.html)
	1. [Webpack with some common libraries](https://github.com/webpack/webpack-with-common-libs)
  1. [Gulp util](https://www.npmjs.com/package/gulp-util)
	1. [Gulp imagemin](https://github.com/sindresorhus/gulp-imagemin)
	1. [Imagemin](https://github.com/imagemin/imagemin)
	1. [Imagemin pngquant](https://www.npmjs.com/package/imagemin-pngquant)
	1. [Imagemin optipng](https://www.npmjs.com/package/imagemin-optipng)
	1. [svgo](https://github.com/svg/svgo)
	1. [Gulp ng config](https://github.com/ajwhite/gulp-ng-config)
	1. [Gulp notify](https://github.com/mikaelbr/gulp-notify)
	1. [Yargs](https://github.com/bcoe/yargs)

**[⬆ back to top](#table-of-contents)**
