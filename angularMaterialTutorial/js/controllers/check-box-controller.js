/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('checkBoxController', checkBoxController);

    /* dependency injection to ensure valid minified code */
    checkBoxController.$inject = ['$scope'];

    //function
    function checkBoxController($scope){
        $scope.test = 'hello world';
    }


})();

