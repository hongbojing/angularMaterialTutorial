/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('whiteFrameController', whiteFrameController);

    /* dependency injection to ensure valid minified code */
    whiteFrameController.$inject = ['$scope'];

    //function

    function whiteFrameController($scope){
        $scope.test = 'hello world';
    }
})();
