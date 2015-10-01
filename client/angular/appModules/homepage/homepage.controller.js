/**
 * @ngdoc function
 * @name TwitterBackup:controller:HomePageRoute
 * @description
 * @property $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.
 * @property TWITTER_OAUTH is application constant and store information for twitter remote urls.
 */
function HomeController($http, TWITTER_OAUTH) {
	'ngInject';

	const ViewModel = this;

	// We need to Obtaining a request token
	// Source: https://dev.twitter.com/web/sign-in/implementing
	$http({
		'url': TWITTER_OAUTH.REQUEST_TOKEN,
		'method': 'POST',
		'headers': {
			"Authorization": signatureObj.authorization_header,
			"Content-Type": "application/x-www-form-urlencoded"
		},
	});

	$http.post(TWITTER_OAUTH.REQUEST_TOKEN, {
			'oauth_callback': 'hello word!'
		})
		.then(function(response) {
		}, function(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
}

export default HomeController;
