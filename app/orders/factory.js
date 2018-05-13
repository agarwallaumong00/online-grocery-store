'use strict';

function ordersService($mdDialog) {
    var _ordersList = [],
        _productList = [],
        _productIdList = [];

    function createNewOrder(order) {
        _ordersList.unshift(order);
        resetList();
    }

    function getOrdersList() {
        return _ordersList;
    }

    function toggleCheckbox(product) {
        var index = _productIdList.indexOf(product.id);
        if(index === -1) {
            _productList.push(product);
            _productIdList.push(product.id);
        } else {
            _productList.splice(index, 1);
            _productIdList.splice(index, 1);
        }
    }

    function getProductList() {
        return _productList;
    }

    function resetList() {
        _productList = [];
        _productIdList = [];
    }

    function orderConfirmation(orderId) {
        $mdDialog.show({
            locals: {
                id: orderId
            },
            clickOutsideToClose: false,
            template: require('./order-confirmation-dialog/order-confirmation-dialog.html'),
            controller: require('./order-confirmation-dialog/order-confirmation-dialog.controller'),
            controllerAs: '$ctrl'
        })
    }

    return {
        createNewOrder: createNewOrder,
        getOrdersList: getOrdersList,
        toggleCheckbox: toggleCheckbox,
        getProductList: getProductList,
        orderConfirmation: orderConfirmation,
        resetList: resetList
    }
}

ordersService.$inject = ['$mdDialog'];

module.exports = ordersService;