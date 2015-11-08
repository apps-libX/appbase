/**
 * Created by apps-libX on November 8th 2015, 4:26:41 pm.
 *
 * @module test.appsLibX.appbase
 * @name appbaseService
 *
 * @description
 * Tests for appbaseService under appsLibX.appbase
 * _Test description._
 */


describe('Service: appsLibX.appbase.appbaseService', function () {

    'use strict';

    // load the service's module
    beforeEach(module('appsLibX.appbase'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (appbaseService) {
        service = appbaseService;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
