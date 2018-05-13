'use strict';

function recentOrdersDetailsController() {
    var vm = this;

    vm.getTotalAmount = getTotalAmount;

    function getTotalAmount() {
        var totalPrice = 0;
        vm.order.products.forEach(function(prod) {
            totalPrice += prod.price;
        })
        return totalPrice;
    }
}

recentOrdersDetailsController.$inject = [];

module.exports = recentOrdersDetailsController;