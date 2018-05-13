'use strict';

require('angular');
require('angular-material');
require('@uirouter/angularjs');

require('./index.css');
require('./index.resource');

require('./catalog');
require('./shared');
require('./orders');
require('./product-details')

angular.module('jumbotail', [
    'ngMaterial',
    'ui.router',
    'jumbotail.catalog',
    'jumbotail.shared',
    'jumbotail.orders',
    'jumbotail.productDetails'
])
.config(require('./index.route'))
;