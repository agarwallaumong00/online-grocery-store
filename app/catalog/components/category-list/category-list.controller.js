'use strict';

function categoryListController() {
    var vm = this;

    vm.onChangeCategory = onChangeCategory;

    function onChangeCategory(category) {
        vm.selectedCategory = category;
        vm.changeCategory({category: category});
    }
}

module.exports = categoryListController;