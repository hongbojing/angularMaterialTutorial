/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('switchController', switchController);

    /* dependency injection to ensure valid minified code */
    switchController.$inject = ['$scope'];

    //function
    function switchController ($scope) {
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
    }

})();

