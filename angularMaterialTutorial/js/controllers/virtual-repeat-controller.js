/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('virtualRepeatController', virtualRepeatController);

    /* dependency injection to ensure valid minified code */
    virtualRepeatController.$inject = ['$scope'];

    //function
    function virtualRepeatController ($scope) {
        $scope.items = [];
        for (var i = 0; i < 1000; i++) {
            $scope.items.push(i);
        }
    }

})();

