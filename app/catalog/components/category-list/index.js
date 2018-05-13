'use strict';

var categoryListComponent = {
    template: require('./category-list.html'),
    controller: require('./category-list.controller'),
    bindings: {
        categories: '<',
        selectedCategory: '=',
        changeCategory: '&'
    }
};

module.exports = categoryListComponent;