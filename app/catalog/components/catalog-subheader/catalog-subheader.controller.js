'use strict';

function catalogSubHeaderController($mdDialog) {
    var vm = this;

    vm.enableCheckbox = false;
    vm.orderAll = true;

}

catalogSubHeaderController.$inject = ['$mdDialog'];

module.exports = catalogSubHeaderController;