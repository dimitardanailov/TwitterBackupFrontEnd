import HomePageTemplate from './homepage.html';
import HomeController from './homepage.controller';

/**
 * @ngdoc function
 * @name TwitterBackup:controller:HomePageRoute
 * @description
 */
function routeConfig($stateProvider) {
	'ngInject';

	$stateProvider
		.state('app.homepage', {
			url: '/homepage',
			template: HomePageTemplate,
			controller: HomeController,
			controllerAs: 'HomePageCtrl'
		});
}

export default routeConfig;
