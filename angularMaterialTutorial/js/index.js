/**
 * Created by hongbojing on 5/23/16.
 */

angular
    .module('firstApplication', ['ngMaterial'])
    .controller('mainController', mainController)
;
mainController.$inject = ['$scope', '$mdBottomSheet'];

function mainController ($scope, $mdBottomSheet) {
    $scope.tiles = [
        {imgName: '0test', templateUrlValue: 'test', tooltipsValue: 'For testing'},
        {imgName: '1autocomplete', templateUrlValue: 'autoComplete', tooltipsValue: 'Autocomplete'},
        {imgName: '2bottomSheet', templateUrlValue: 'bottomSheet', tooltipsValue: 'Bottom Sheet'},
        {imgName: '3button', templateUrlValue: 'button', tooltipsValue: 'Button'},
        {imgName: '6card', templateUrlValue: 'card', tooltipsValue: 'Card'},
        {imgName: '7checkbox', templateUrlValue: 'checkBox', tooltipsValue: 'Checkbox'},
        {imgName: '8chip', templateUrlValue: 'chip', tooltipsValue: 'Chip'},
        {imgName: '9contactChip', templateUrlValue: 'contactChip', tooltipsValue: 'Contact Chip'},
        {imgName: '10content', templateUrlValue: 'content', tooltipsValue: 'Content'},
        {imgName: '11datePicker', templateUrlValue: 'datePicker', tooltipsValue: 'Date Picker'},
        {imgName: '12dialog', templateUrlValue: 'dialog', tooltipsValue: 'Dialog'},
        {imgName: '13divider', templateUrlValue: 'divider', tooltipsValue: 'Divider'},
        {imgName: '14fabSpeedDial', templateUrlValue: 'fabSpeedDial', tooltipsValue: 'Fab Speed Dial'},
        {imgName: '15fabToolbar', templateUrlValue: 'fabToolbar', tooltipsValue: 'Fab Tool Bar'},
        {imgName: '16grid', templateUrlValue: 'grid', tooltipsValue: 'Grid'},
        {imgName: '17icon', templateUrlValue: 'icon', tooltipsValue: 'Icon'},
        {imgName: '18input', templateUrlValue: 'input', tooltipsValue: 'Input'},
        {imgName: '19layout', templateUrlValue: 'layout', tooltipsValue: 'Layout'},
        {imgName: '20flexDirective', templateUrlValue: 'flexDirective', tooltipsValue: 'Flex Directive'},
        {imgName: '21list', templateUrlValue: 'list', tooltipsValue: 'List'},
        {imgName: '22menu', templateUrlValue: 'menu', tooltipsValue: 'Menu'},
        {imgName: '23menuBar', templateUrlValue: 'menuBar', tooltipsValue: 'Menu Bar'},
        {imgName: '24progressBar', templateUrlValue: 'progressBar', tooltipsValue: 'Progress Bar'},
        {imgName: '25progressLiner', templateUrlValue: 'progressLiner', tooltipsValue: 'Progress Liner'},
        {imgName: '26radioButton', templateUrlValue: 'radioButton', tooltipsValue: 'Radio Button'},
        {imgName: '27select', templateUrlValue: 'select', tooltipsValue: 'Select'},
        {imgName: '28sidenav', templateUrlValue: 'sidenav', tooltipsValue: 'Side Nav'},
        {imgName: '29slider', templateUrlValue: 'slider', tooltipsValue: 'Slider'},
        {imgName: '30subheader', templateUrlValue: 'subheader', tooltipsValue: 'Sub Header'},
        {imgName: '31swipe', templateUrlValue: 'swipe', tooltipsValue: 'Swipe'},
        {imgName: '32switch', templateUrlValue: 'switch', tooltipsValue: 'Switche'},
        {imgName: '33tab', templateUrlValue: 'tab', tooltipsValue: 'Tab'},
        {imgName: '34theme', templateUrlValue: 'theme', tooltipsValue: 'Theme'},
        {imgName: '36toast', templateUrlValue: 'toast', tooltipsValue: 'Toast'},
        {imgName: '37toolbar', templateUrlValue: 'toolbar', tooltipsValue: 'Tool Bar'},
        {imgName: '38tooltip', templateUrlValue: 'tooltip', tooltipsValue: 'Tooltip'},
        {imgName: '39typography', templateUrlValue: 'typography', tooltipsValue: 'Typography'},
        {imgName: '40virtualRepeat', templateUrlValue: 'virtualRepeat', tooltipsValue: 'Virtual Repeat'},
        {imgName: '41whiteFrame', templateUrlValue: 'whiteFrame', tooltipsValue: 'White Frame'}
    ];

    $scope.openBottomSheet = function(inputTemplateUrlValue) {
        $mdBottomSheet.show({
            templateUrl: 'partials/' + inputTemplateUrlValue + '.html',
            controller: inputTemplateUrlValue + 'Controller',
            clickOutsideToClose: false
        });
    };
}
