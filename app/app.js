'use strict';

define([
	'angular',
	'uiRouter',
	'controllers/home'
], function (angular, uiRouter, homeController) {
	// Declare app level module which depends on views, and components
	var app = angular.module('whApp', [
		'ui.router'
	]);

	// Define the configuration for routes
	app.config(function ($stateProvider, $urlRouterProvider) {


		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get("$state");
			$state.go('home');
		});

		$stateProvider
			.state('home', {
				url: '/home/:param1&param2',
				params:{
					param1:null,
					param2:null
				},
				controller: 'HomeCtrl as vm',
				templateUrl:'views/home.html'
			})
	});

	// Define the controller
	app.controller('HomeCtrl', homeController);

	return app;
});

