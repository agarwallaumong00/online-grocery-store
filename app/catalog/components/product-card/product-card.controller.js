'use strict';

function productCardController($state) {
    var vm = this;

    vm.enableCheckbox = true;
    vm.orderAll = false;
    vm.viewProductDetails = viewProductDetails;

    function viewProductDetails(product) {
        $state.go('productDetails', {
            'id': product.id,
            product: product
        })
    }
}

productCardController.$inject = ['$state'];

module.exports = productCardController;