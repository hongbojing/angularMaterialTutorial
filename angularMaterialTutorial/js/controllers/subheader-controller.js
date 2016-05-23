/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('subheaderController', subheaderController);

    /* dependency injection to ensure valid minified code */
    subheaderController.$inject = ['$scope'];

    //function
    function subheaderController ($scope) {
        $scope.fruitNames = ['Apple', 'Banana', 'Orange'];
        $scope.vegNames = ['Carrot', 'Potato', 'Cabbage'];
        $scope.eateries = ['Milk', 'Bread'];
    }

})();

