'use strict';

var recentOrderDetailsComponent = {
    template: require('./recent-orders-details.html'),
    controller: require('./recent-orders-details.controller'),
    bindings: {
        order: '<'
    }
}

module.exports = recentOrderDetailsComponent;