'use strict';

function catalogContainerController(catalogService, $log) {
    var vm = this;
    vm.categories = catalogService.getCategoriesData();
    vm.products = catalogService.getProductsData();
    
    vm.filterProductsByCategory = filterProductsByCategory;

    function init() {
        if(!vm.products) {
            getProducts();
        }
        if(!vm.categories) {
            getCategories();
        } else {
            vm.selectedCategory = vm.categories[0];
        }
    }

    function getProducts() {
        catalogService.getProducts().then(function(products) {
            vm.products = products;
        }, function(error) {
           $log.log(error) 
        });
    }

    function getCategories() {
        catalogService.getCategories().then(function(result) {
            vm.categories = result;
            vm.selectedCategory = vm.categories[0];
        }, function(error) {
           $log.log(error) 
        });
    }

    function filterProductsByCategory(category) {
        vm.products = catalogService.filterProductsByCategory(category.id);
    }

    init();
}

catalogContainerController.$inject = ['catalogService', '$log'];

module.exports = catalogContainerController;