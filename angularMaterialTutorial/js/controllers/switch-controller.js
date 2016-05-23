/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('switchController', switchController);

    /* dependency injection to ensure valid minified code */
    switchController.$inject = ['$scope', '$mdDialog'];

    //function
    function switchController ($scope, $mdDialog) {
        $scope.data = {
            switch1: true,
            switch2: false,
            switch3: false,
            switch4: true,
            switch5: true,
            switch6: false
        };
        $scope.message = 'false';
        $scope.onChange = function(state) {
            $scope.message = state;
        };

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/32switch.png">' +
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

