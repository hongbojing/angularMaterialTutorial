/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('progressLinerController', progressLinerController);

    /* dependency injection to ensure valid minified code */
    progressLinerController.$inject = ['$scope', '$interval', '$mdDialog'];

    //function
    function progressLinerController ($scope, $interval, $mdDialog) {
        var self = this,  j= 0, counter = 0;
        self.modes = [ ];
        self.activated = true;
        self.determinateValue = 30;
        self.toggleActivation = function() {
            if ( !self.activated ) self.modes = [ ];
            if (  self.activated ) j = counter = 0;
        };

        $interval(function() {
            self.determinateValue += 1;
            if (self.determinateValue > 100) {
                self.determinateValue = 30;
            }
            if ( (j < 5) && !self.modes[j] && self.activated ) {
                self.modes[j] = 'indeterminate';
            }
            if ( counter++ % 4 == 0 ) j++;
        }, 100, 0, true);

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/25progressLiner.png">' +
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

