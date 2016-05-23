/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('cardController', cardController);

    /* dependency injection to ensure valid minified code */
    cardController.$inject = ['$scope', '$mdDialog'];

    //function
    function cardController($scope, $mdDialog){
        $scope.test = 'hello world';

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/6card.png">' +
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

