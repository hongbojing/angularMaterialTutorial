/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('selectController', selectController);

    /* dependency injection to ensure valid minified code */
    selectController.$inject = ['$scope'];

    //function
    function selectController ($scope) {
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
    }


})();

