'use strict';

var recentOrdersSideBar = {
    template: require('./recent-orders-sidebar.html'),
    controller: require('./recent-orders-sidebar.controller'),
    bindings: {
        orderList: '<',
        selectedOrder: '='
    }
}

module.exports = recentOrdersSideBar;