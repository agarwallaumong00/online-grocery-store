'use strict';

function orderButtonController(ordersService) {
    var vm = this,
        newOrder = {},
        productList = [];

    vm.toggleSelection = toggleSelection;
    vm.orderNow = orderNow;
    vm.getCount = getCount;

    function init() {
        ordersService.resetList();
    }

    function getCount() {
        return ordersService.getProductList().length;
    }

    function orderNow() {
        productList = ordersService.getProductList();
        if(productList.length) {
            placeOrder();
        } else {
            productList.push(vm.product);
            placeOrder();
        }
    }

    function placeOrder() {
        createOrder();
        productList = [];
        ordersService.createNewOrder(newOrder);
        ordersService.orderConfirmation(newOrder.id);
    }

    function createOrder() {
        newOrder = {};
        newOrder.id = generateOrderId();
        newOrder.products = productList;
    }

    function generateOrderId() {
        var d = new Date();
        return "jumbotail_" + d.getTime();
    }

    function toggleSelection() {
        ordersService.toggleCheckbox(vm.product);
    }

    init();
}

orderButtonController.$inject = ['ordersService'];

module.exports = orderButtonController;