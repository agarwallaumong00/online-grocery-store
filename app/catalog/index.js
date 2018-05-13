'use strict';

module.exports = angular.module('jumbotail.catalog', [])
    .config(require('./route'))
    .component('catalogContainer', require('./components/catalog-container'))
    .component('categoryList', require('./components/category-list'))
    .component('productList', require('./components/product-list'))
    .component('catalogSubHeader', require('./components/catalog-subheader'))
    .component('productCard', require('./components/product-card'))
    .factory('catalogService', require('./factory'))
    ;