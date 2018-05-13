'use strict';

module.exports = angular.module('jumbotail.productDetails', [])
    .config(require('./route'))
    .component('productDetailsSection', require('./components/product-details-section'))