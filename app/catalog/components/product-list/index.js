'use strict';

var productListComponent = {
    template: require('./product-list.html'),
    controller: require('./product-list.controller'),
    bindings: {
        list: '<',
        category: '<'
    }
}

module.exports = productListComponent;