/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('iconController', iconController);

    /* dependency injection to ensure valid minified code */
    iconController.$inject = ['$scope'];

    //function
    function iconController ($scope) {
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
    }

})();

