/*** Libraries ***/
require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-resource');
require('angular-material');
require('angular-material/angular-material.css');

/*** Configurations ***/
require('./angular/constants/env.js');

/*** Project files ***/
require('./app.scss');
require('./app.js');
require('./index.html');

/*** Angular App Modules ***/
require('./angular/appModules/homepage');
require('./angular/appModules/twitter');
