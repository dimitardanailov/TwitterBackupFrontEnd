import TwitterRoute from './twitter.route';

angular.module('TwitterBackup.twitter', [
		'ui.router',
		'ngAnimate'
	])
	.config(TwitterRoute);
