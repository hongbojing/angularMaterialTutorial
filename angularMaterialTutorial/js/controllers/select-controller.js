/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('selectController', selectController);

    /* dependency injection to ensure valid minified code */
    selectController.$inject = ['$scope', '$mdDialog'];

    //function
    function selectController ($scope, $mdDialog) {
        $scope.users = [
            { id: 1, name: 'Mahesh' },
            { id: 2, name: 'Ramesh' },
            { id: 3, name: 'Sohan' }
        ];
        $scope.selectedUser = { id: 2, name: 'Ramesh' };
        $scope.drinks = [
            { category: 'hard', name: 'Beer' },
            { category: 'hard', name: 'Rum' },
            { category: 'hard', name: 'Vodka' },
            { category: 'hard', name: 'Whiski' },
            { category: 'soft', name: 'Coke' },
            { category: 'soft', name: 'Pepsi' },
            { category: 'soft', name: 'Pulp Maid' },
            { category: 'soft', name: 'Real Juice' }
        ];

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/27select.png">' +
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

