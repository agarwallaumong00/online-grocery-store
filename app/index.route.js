'use strict';

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('home', {
        url: '',
        abstract: true
    });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise(wrongRouteHandler);
}

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function wrongRouteHandler($injector) {
    var state = $injector.get('$state');
    state.go('catalog');
}

wrongRouteHandler.$inject = ['$injector'];

module.exports = routeConfig;

