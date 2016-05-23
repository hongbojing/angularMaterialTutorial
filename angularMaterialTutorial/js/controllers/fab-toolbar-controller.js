/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('fabToolbarController', fabToolbarController);

    /* dependency injection to ensure valid minified code */
    fabToolbarController.$inject = ['$scope'];

    //function
    function fabToolbarController ($scope) {
        $scope.isOpen = false;
        $scope.count = 0;
        $scope.selectedDirection = 'left';
    }

})();

