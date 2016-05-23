/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('swipeController', swipeController);

    /* dependency injection to ensure valid minified code */
    swipeController.$inject = ['$scope', '$mdDialog'];

    //function
    function swipeController ($scope, $mdDialog) {
        $scope.onSwipeLeft = function(ev) {
            alert('Swiped Left!');
        };
        $scope.onSwipeRight = function(ev) {
            alert('Swiped Right!');
        };
        $scope.onSwipeUp = function(ev) {
            alert('Swiped Up!');
        };
        $scope.onSwipeDown = function(ev) {
            alert('Swiped Down!');
        };

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/31swipe.png">' +
                '  </md-dialog-content>' +
                '</md-dialog>',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                }
            });
        };
    }

})();

