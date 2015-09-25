# Gulp Guide

### Table of Contents
  1. [Gulp](#gulp)
  1. [Gulp Util](#gulp-util)
	1. [Gulp Imagemin](#gulp-imagemin)
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

**[⬆ back to top](#table-of-contents)**