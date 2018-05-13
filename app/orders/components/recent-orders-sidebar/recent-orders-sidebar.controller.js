'use strict';

function recentOrdersSidebarController() {
    var vm = this;

    vm.selectOrder = selectOrder;

    function selectOrder(order) {
        vm.selectedOrder = order;
    }
}

recentOrdersSidebarController.$inject = [];

module.exports = recentOrdersSidebarController;