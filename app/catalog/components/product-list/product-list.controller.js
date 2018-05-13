'use strict';

function productListController(catalogService) {
    var vm = this;

    vm.sortByOptions = [{
        label: "Name (A to Z)",
        value: "name"
    },
    {
        label: "Name (Z to A)",
        value: "-name"
    },
    {
        label: "Price (Low to High)",
        value: "price"
    },
    {
        label: "Price (High to Low)",
        value: "-price"
    }
    ];
    vm.selectedOption = vm.sortByOptions[0].value;
    vm.filterByName = "";

    function init() {
        catalogService.registerFilterCallback(filterProducts);
    }

    function filterProducts(str) {
        vm.filterByName = str;
    }

    init();
}

productListController.$inject = ['catalogService'];

module.exports = productListController;