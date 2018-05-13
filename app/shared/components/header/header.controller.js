'use strict';

function headerController($state, catalogService) {
    var vm = this;

    vm.logo = "http://jumbotail.com/wp-content/uploads/2016/02/JumbotailLogo1.png";

    vm.viewRecentOrders = viewRecentOrders;
    vm.gotoCatalogPage = gotoCatalogPage;
    vm.filterProducts = filterProducts;

    function filterProducts(str) {
        catalogService.filterProductsByText(str);
    }

    function viewRecentOrders() {
        $state.go('recentOrders')
    }

    function gotoCatalogPage() {
        $state.go('catalog')
    }
}

headerController.$inject = ['$state', 'catalogService'];

module.exports = headerController;