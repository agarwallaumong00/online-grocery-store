'use strict';

function catalogService($q, $http) {
    var _categories, _products, _callback;

    function getProducts() {
        var deferred = $q.defer(),
            url = '/api/products.json';
        
        $http.get(url).then(function(result) {
            _products = result.data;
            deferred.resolve(result.data);
        },function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function getCategories() {
        var deferred = $q.defer(),
            url = '/api/categories.json';

        $http.get(url).then(function(result) {
            _categories = result.data;
            _categories.unshift({
                id: "0",
                name: "All Categories"
            });
            deferred.resolve(_categories);
        }, function(err) {
            deferred.reject(error);
        })

        return deferred.promise;
    }

    function filterProductsByCategory(categoryId) {
        if(categoryId === "0") {
            return _products;
        }
        var _filteredList = [];
        _products.forEach(function(product) {
            if(product.category.id === categoryId) {
                _filteredList.push(product);
            }
        })
        return _filteredList;
    }

    function getCategoriesData() {
        return _categories;
    }

    function getProductsData() {
        return _products;
    }

    function getProductDetails(productId) {
        var deferred = $q.defer();
        getProducts().then(function(result) {
            deferred.resolve(getProductById(result, productId));
        });
        return deferred.promise;
    }

    function getProductById(arr, id) {
        return arr.find(function(prod) {
            return prod.id === id;
        });
    }

    function registerFilterCallback(method) {
        _callback = method;
    }

    function filterProductsByText(str) {
        if(_callback) {
            _callback(str);
        }
    }

    return {
        getProducts: getProducts,
        getCategories: getCategories,
        filterProductsByCategory: filterProductsByCategory,
        getCategoriesData: getCategoriesData,
        getProductsData: getProductsData,
        getProductDetails: getProductDetails,
        registerFilterCallback: registerFilterCallback,
        filterProductsByText: filterProductsByText
    }
}

catalogService.$inject = ['$q', '$http'];

module.exports = catalogService;