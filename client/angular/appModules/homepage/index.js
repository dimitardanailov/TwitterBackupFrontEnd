import HomePageRoute from './homepage.route';

angular.module('TwitterBackup.homepage', [
		'ui.router',
		'ngAnimate'
	])
	.config(HomePageRoute);
