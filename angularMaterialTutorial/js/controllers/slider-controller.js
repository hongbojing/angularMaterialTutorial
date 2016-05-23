/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('sliderController', sliderController);

    /* dependency injection to ensure valid minified code */
    sliderController.$inject = ['$scope', '$mdSidenav'];

    //function
    function sliderController ($scope, $mdSidenav) {
        $scope.color = {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        };
        $scope.rating = 3;
        $scope.disabled = 70;
    }

})();

