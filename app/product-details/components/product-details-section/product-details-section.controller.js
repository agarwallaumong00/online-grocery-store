'use strict';

function productDetailsController($stateParams, $sce, catalogService) {
    var vm = this;

    vm.product = $stateParams.product;
    vm.enableCheckbox = false;
    vm.orderAll = false;

    vm.trustTemplate = trustTemplate;

    function trustTemplate(template) {
        return $sce.trustAsHtml(template);
    }

    function init() {
        if(!vm.product) {
            catalogService.getProductDetails($stateParams.id).then(function(data){
                vm.product = data;
            });
        }
    }

    init()
}

productDetailsController.$inject = ['$stateParams', '$sce', 'catalogService'];

module.exports = productDetailsController;