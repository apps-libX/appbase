/**
 * Created by apps-libX on November 8th 2015, 4:26:41 pm.
 */

// appbase
angular.module('appsLibX.appbase').config(['$translateProvider', function ($translateProvider) {
    'use strict';
    $translateProvider.translations('id', {
        TITLE : 'Hallo',
        FOO   : 'Ini adalah paragraf.'
    });
    // $translateProvider.preferredLanguage('id');
}]);

//appbase
//  .controller('Ctrl', function ($scope, $translate) {
//      $scope.changeLanguage = function (key) {
//          $translate.use(key);
//      };
//  });

// <h1>{{ 'TITLE' | translate }}</h1>
// <p>{{ 'FOO' | translate }}</p>