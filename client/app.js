// 'use strict';

/**
 * @ngdoc overview
 * @name TwitterBackup
 * @description
 * # Develop a Javascript-based Single Page Application (SPA) with .NET Backend that allows users to store tweets from their favorite Twitter users. The web application should provide the following functionality.
 *
 * Main module of the application.
 */
angular.module('TwitterBackup', [
	'ui.router',
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngMaterial'
]).config(appConfig);

/**
 * @ngdoc appConfig
 * @name TwitterBackup
 * @description Method is using to setup html5Mode, default route and project structure.
 * @property $urlRouterProvider 
 * # AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine.
 * # @link https://github.com/angular-ui/ui-router
 * @property $locationProvider Use the $locationProvider to configure how the application deep linking paths are stored.
 * @property $httpProvider Use $httpProvider to change the default behavior of the $http service.
 * @property $stateProvider
 */
function appConfig($urlRouterProvider, $locationProvider, $httpProvider, $stateProvider) {
	'ngInject';

	$urlRouterProvider.otherwise('/home');

	// Application use HTML5 History API
	// https://docs.angularjs.org/guide/$location
	$locationProvider.html5Mode(true);
}
