define([], function(app){
    'use strict';

    function homeController($scope){
        var vm = this;

        vm.tittle = "hola require";
    }

    homeController.$inject=['$scope'];

    return homeController;
});
