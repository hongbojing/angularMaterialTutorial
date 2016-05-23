/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('themeController', themeController);

    /* dependency injection to ensure valid minified code */
    themeController.$inject = ['$scope'];

    //function
    function themeController($scope){
        $scope.test = 'hello world';
    }

})();

