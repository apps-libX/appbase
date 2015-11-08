/**
 * Created by apps-libX on November 8th 2015, 4:26:41 pm.
 *
 * @module test.appsLibX.appbase
 * @name appbase

 * @description
 * Tests for appbase under appsLibX.appbase
 * _Test description._
 */


describe('Directive: appsLibX.appbase.appbase', function () {

    'use strict';

    var ele, scope;

    beforeEach(module('appsLibX.appbase'));
    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();

        //update the line below!
        ele = angular.element('<Replace with directive>');
        //update the above line if you haven't!
        $compile(ele)(scope);
        scope.$apply();
    }));

    /**
     * @description
     * Sample test case to check if HTML rendered by the directive is non empty
     * */
    it('should not render empty html', function () {
        scope.$apply(function () {

            /**
             * Set the scope properties here.
             * scope.desc = 'test hostname';
             * scope.status = 'valid';
             *
             */
        });
        expect(ele.html()).not.toBe('');
    });
});
