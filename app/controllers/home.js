define([], function(app){
    'use strict';

    function homeController($scope, $stateParams){
        var vm = this;
        vm.templateUrl = "views/home2.html"
        if($stateParams.param1){
            vm.templateUrl = `views/${$stateParams.param1}.html`;
        }
        vm.tittle = "hola require";
    }

    homeController.$inject=['$scope', '$stateParams'];

    return homeController;
});
