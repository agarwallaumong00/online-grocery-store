'use strict';

function productDetailsRoute($stateProvider) {
    $stateProvider.state('productDetails', {
        parent: 'catalog',
        url: "/:id",
        views: {
            'main@': {
                component: 'productDetailsSection'
            }
        },
        params: {
            product: null
        }
    })
}

productDetailsRoute.$inject = ['$stateProvider'];

module.exports = productDetailsRoute;