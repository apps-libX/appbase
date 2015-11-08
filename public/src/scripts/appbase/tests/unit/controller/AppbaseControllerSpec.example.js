/**
 * Created by apps-libX on November 8th 2015, 4:26:41 pm.
 *
 * @module test.appsLibX.appbase
 * @name AppbaseController
 *
 * @description
 * Tests for AppbaseController under appsLibX.appbase
 * _Test description._
 */


describe('Controller: appsLibX.appbase.AppbaseController', function () {

    'use strict';

    // load the controller's module
    beforeEach(module('appsLibX.appbase'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('AppbaseController', {
            $scope : scope
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
});
