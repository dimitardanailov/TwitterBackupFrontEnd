import HomeTemplate from './toolbar.html';
import ToolbarController from './home.controller';

/**
 * @ngdoc function
 * @name TwitterBackup:controller:HomePageController
 * @description
 * # Develop a Javascript-based Single Page Application (SPA) with .NET Backend that allows users to store tweets from their favorite Twitter users. The web application should provide the following functionality.
 *
 * 
 */
function routeConfig($stateProvider) {
	'ngInject';

	$stateProvider
		.state('app.public.home', {
			url: '/home',
			template: HomeTemplate,
			controller: HomeController,
			controllerAs: 'ToolbarCtrl'
		});
}

export default routeConfig;
