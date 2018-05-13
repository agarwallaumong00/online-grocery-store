'use strict';

var productCardComponent = {
    template: require('./product-card.html'),
    controller: require('./product-card.controller'),
    bindings: {
        product: '<'
    }
};

module.exports = productCardComponent;