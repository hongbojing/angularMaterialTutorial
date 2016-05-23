/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('flexDirectiveController', flexDirectiveController);

    /* dependency injection to ensure valid minified code */
    flexDirectiveController.$inject = ['$scope'];

    //function
    function flexDirectiveController($scope){
        $scope.test = 'hello world';
    }

})();

