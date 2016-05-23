/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('iconController', iconController);

    /* dependency injection to ensure valid minified code */
    iconController.$inject = ['$scope', '$mdDialog'];

    //function
    function iconController ($scope, $mdDialog) {
        var iconData = [
            {name: 'accessibility'  , color: "#000" },
            {name: 'question_answer', color: "rgb(89, 226, 168)" },
            {name: 'backup'         , color: "#A00" },
            {name: 'email'          , color: "#00A" }
        ];
        $scope.fonts = [].concat(iconData);
        $scope.sizes = [
            {size:"md-18",padding:0},
            {size:"md-24",padding:2},
            {size:"md-36",padding:6},
            {size:"md-48",padding:10}
        ];

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/17icon.png">' +
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

