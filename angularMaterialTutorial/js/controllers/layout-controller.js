/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('layoutController', layoutController);

    /* dependency injection to ensure valid minified code */
    layoutController.$inject = ['$scope'];

    //function
    function layoutController($scope){
        $scope.test = 'hello world';
    }

})();

