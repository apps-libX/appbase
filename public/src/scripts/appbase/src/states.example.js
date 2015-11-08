/**
 * Created by apps-libX on November 8th 2015, 4:26:41 pm.
 */

appbase.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        'use strict';

        // $urlRouterProvider.otherwise('/');

        $stateProvider
            //.state('main', {
            //    url         : '/',
            //    templateUrl : '/appbase'
            //})
            .state('appbase', {
                url         : '/appbase',
                templateUrl : '/appbase'
            });
            //.state('appbaseDashboard.appbase', {
            //    url         : '/dashboard/appbase',
            //    templateUrl : '/dashboard/appbase'
            //});
    }
]);