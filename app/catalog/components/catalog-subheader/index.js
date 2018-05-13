'use strict';

var catalogSubHeaderComponent = {
    template: require('./catalog-subheader.html'),
    controller: require('./catalog-subheader.controller'),
    bindings: {
        category: '<',
        count: '<',
        sortByOptions: '<',
        selectedOption: '='
    }
};

module.exports = catalogSubHeaderComponent;