/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('buttonController', buttonController);

    /* dependency injection to ensure valid minified code */
    buttonController.$inject = ['$scope'];

    //function
    function buttonController ($scope) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';
    }



})();

