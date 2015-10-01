/**
 * @ngdoc function
 * @name TwitterBackup:controllerTwitterCtrl:
 * @description
 */
function routeConfig($stateProvider) {
	'ngInject';

	$stateProvider
		// Using a '.' within a state name declares a child within a parent.
		// So you have a new state 'twitter' within the parent 'app' state.
		.state('app.twitter', {
			url: '/twitter'
		});
}

export default routeConfig;
