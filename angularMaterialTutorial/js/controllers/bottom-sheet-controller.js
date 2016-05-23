/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('bottomSheetController', bottomSheetController);

    /* dependency injection to ensure valid minified code */
    bottomSheetController.$inject = ['$scope', '$mdBottomSheet'];

    function bottomSheetController ($scope, $mdBottomSheet) {
        $scope.openBottomSheet = function() {
            $mdBottomSheet.show({
                template: '<md-bottom-sheet>Learn <b>Angular Material</b> @ TutorialsPoint.com!</md-bottom-sheet>'
            });
        };
    }

})();
