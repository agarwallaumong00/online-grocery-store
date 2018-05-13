'use strict';

function recentOredersRoute($stateProvider) {
    $stateProvider.state('recentOrders', {
        parent: 'home',
        url: '/my-orders',
        views: {
            'main@': {
                component: 'recentOrders'
            }
        }
    })
}

recentOredersRoute.$inject = ['$stateProvider'];

module.exports = recentOredersRoute;