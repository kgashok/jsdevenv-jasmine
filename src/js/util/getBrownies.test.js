/*global $:false, jasmine, window, describe, spyOn, it, expect */
describe('util/getBrownies', function () {
    'use strict';

    var gBot = window.getBrownies; 

    it('should return 174 for kgashok', function () {

        /*
        spyOn($, 'ajax').andcallFake(function(options) {
            options.success();
        });
        var callback = jasmine.createSpy();
        gBot.getPoints('kgashok', callback);
        expect(callback).toHaveBeenCalled();
        */

        var callback = jasmine.createSpy();
        gBot.getPoints('kgashok', callback);
        waitsFor(function() {
            return callback.callCount > 0;
        });
        runs(function() {
            expect(callback).toHaveBeenCalled();
        });

    });
    
    it('length-zero user name', function () {
        expect (1).toBe(2);
        //expect(gBot.getPoints('').toBe(0) );
    });

    /*
    var callback = jasmine.createSpy();
    getProduct(123, callback);
    waitsFor(function() {
        return callback.callCount > 0;
    });
    runs(function() {
        expect(callback).toHaveBeenCalled();
    });

    it("should execute the callback function on success", function () {
        spyOn($, "ajax").andCallFake(function(options) {
            options.success();
        });
        var callback = jasmine.createSpy();
        getPoints('kgashok'), callback);
        expect(callback).toHaveBeenCalled();
    });*/
});
