'use strict';

module.exports = angular.module('jumbotail.orders', [])
    .config(require('./route'))
    .component('recentOrders', require('./components/recent-orders'))
    .component('recentOrdersSidebar', require('./components/recent-orders-sidebar'))
    .component('recentOrderDetails', require('./components/recent-orders-details'))
    .factory('ordersService', require('./factory'))
