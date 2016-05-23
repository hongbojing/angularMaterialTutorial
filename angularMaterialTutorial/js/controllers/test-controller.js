/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('testController', testController);

    /* dependency injection to ensure valid minified code */
    testController.$inject = ['$scope'];

    //function
    function testController($scope){
        $scope.test = 'hello world';
    }
})();

