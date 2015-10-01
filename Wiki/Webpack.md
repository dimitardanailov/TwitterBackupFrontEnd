# Webpack Guide

**Note**: Application use ES6 with Babel.

### Table of Contents
  1. [Webpack](#webpack)
  1. [Webpack Dev Server](#webpack-dev-server)
  1. [Sass loader](#sass-loader)
  1. [Style Loader](#style-loader)
  1. [CSS Loader](#css-loader)
  1. [HTML Loader](#html-loader)
  1. [Babel Loader](#babel-loader)
  1. [Ng-Annotate Loader](#ngAnnotate-loader)
  1. [Eslint Loader](#eslint-loader)

### Webpack

> webpack is a module bundler. webpack takes modules with dependencies and generates static assets representing those modules.

#### Install webpack globally:

```bash
$ npm install webpack -g
$ npm install webpack-dev-server -g
```

#### Install webpack locally with dependencies:

```bash
$ npm install
```

#### Usage

Run `webpack-dev-server` to start a development server at http://localhost:{application_port} with livereload
at http://localhost:{application_port}/webpack-dev-server/

#### Run

```bash
$ webpack-dev-server
```

**[⬆ back to top](#table-of-contents)**

### Webpack Dev Server
> https://github.com/webpack/webpack-dev-server

We use the webpack dev server for live reload and linting in development.

### Loaders

#### Sass Loader
> https://github.com/jtangelder/sass-loader

Sass loader compiles our SCSS and injects it into the bundle.

#### Style Loader
> https://github.com/webpack/style-loader

Style loader allows us to dynamically alter the CSS in a given page.

#### CSS Loader
> https://github.com/webpack/css-loader

Used for injecting standard CSS into the bundle.

#### HTML Loader
> https://github.com/webpack/html-loader

Exports HTML as string and minifies it. Allows us to conserve requests when loading templates.

#### Babel Loader
> https://github.com/babel/babel-loader

Allows us to transpile ES6 into ES5 for greater compatibility.

#### Ng-Annotate Loader
> https://github.com/huston007/ng-annotate-loader

Injects Angular dependencies into controllers for production mode.

#### Eslint Loader
> https://github.com/MoOx/eslint-loader

Lints and validates our code based on the rules in the .eslintrc file.

**[⬆ back to top](#table-of-contents)**
