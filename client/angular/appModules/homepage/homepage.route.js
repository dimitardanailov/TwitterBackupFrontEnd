import HomePageTemplate from './homepage.html';
import HomeController from './homepage.controller';

/**
 * @ngdoc function
 * @name TwitterBackup:controller:HomePageCtrl
 * @description
 */
function routeConfig($stateProvider) {
	'ngInject';

	$stateProvider
		// Using a '.' within a state name declares a child within a parent.
		// So you have a new state 'homepage' within the parent 'app' state.
		.state('app.homepage', {
			url: '/homepage',
			template: HomePageTemplate,
			controller: HomeController,
			controllerAs: 'HomePageCtrl'
		});
}

export default routeConfig;
