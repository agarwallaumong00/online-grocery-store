'use strict';

function recentOrdersController(ordersService) {
    var vm = this;

    vm.orderList = ordersService.getOrdersList();
    vm.selectedOrder = vm.orderList[0];

}

recentOrdersController.$inject = ['ordersService'];

module.exports = recentOrdersController;