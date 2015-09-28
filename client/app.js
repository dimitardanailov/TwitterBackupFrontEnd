/**
 * @ngdoc overview
 * @name TwitterBackup
 * @description
 * # Develop a Javascript-based Single Page Application (SPA) with .NET Backend that allows users to store tweets from their favorite Twitter users. The web application should provide the following functionality.
 *
 * Source and idea: https://github.com/angular-ui/ui-router/tree/master/sample
 * Main module of the application.
 */
angular.module('TwitterBackup', [
		'TwitterBackup.homepage',
		'ui.router',
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngMaterial',
		'TwitterBackup.Constants'
	])
	.config(appConfig)
	.run(applicationConfiguration);

/**
 * @ngdoc function
 * @name TwitterBackup
 * @description Method is using to setup html5Mode, default route and project structure.
 * @property $urlRouterProvider
 * # AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine.
 * # @link https://github.com/angular-ui/ui-router
 * @property $locationProvider Use the $locationProvider to configure how the application deep linking paths are stored.
 * @property $httpProvider Use $httpProvider to change the default behavior of the $http service.
 * @property $stateProvider $state service is responsible for representing states as well as transitioning between them. It also provides interfaces to ask for current state or even states you're coming from.
 */
function appConfig($urlRouterProvider, $locationProvider, $httpProvider, $stateProvider) {
	'ngInject';

	// Application use HTML5 History API
	// https://docs.angularjs.org/guide/$location
	$locationProvider.html5Mode(true);

	const defaultPage = 'homepage';

	// Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
	$urlRouterProvider
		// If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
		.otherwise(defaultPage);

	// Use $stateProvider to configure your states.
	$stateProvider
		.state('app', {
			abstract: true,
			template: '<section ui-view></section>'
		});
}

/**
 * @ngdoc function
 * @name TwitterBackup
 * @description Method is using to setup html5Mode, default route and project structure.
 */
function applicationConfiguration($rootScope, $state, $stateParams) {
	'ngInject';

	// It's very handy to add references to $state and $stateParams to the $rootScope
	// so that you can access them from any scope within your applications.For example,
	// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
	// to active whenever 'contacts.list' or one of its decendents is active.
	// $rootScope.$state = $state;
	// $rootScope.$stateParams = $stateParams;
}
