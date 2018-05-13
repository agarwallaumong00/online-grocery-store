'use strict';

var orderButtonComponent = {
    template: require('./order-button.html'),
    controller: require('./order-button.controller'),
    bindings: {
        enableCheckbox: '<',
        orderAll: '<',
        product: '<'
    }
}

module.exports = orderButtonComponent;