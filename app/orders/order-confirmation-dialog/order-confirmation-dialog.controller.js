'use strict';

function orderConfirmationDialogController($mdDialog, $state, locals) {
    var vm = this;

    vm.orderId = locals.id;
    vm.viewOrderSummary = viewOrderSummary;
    
    function closeDialog() {
        $mdDialog.cancel();
    }

    function viewOrderSummary() {
        closeDialog();
        $state.go('recentOrders');
    }
}

orderConfirmationDialogController.$inject = ['$mdDialog', '$state', 'locals'];

module.exports = orderConfirmationDialogController;