/*global $:false, describe, spyOn, it, expect */
describe('util/getBrownies', function () {
    'use strict';

    /*
    it('should return 174 for kgashok', function (done) {
    function getProduct (id, callback) {
        $.ajax({
            type: 'GET',
            url: 'data.json',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: callback
            });
        }
        
        spyOn($, 'ajax').and.callFake(function (options) {
            options.success(174);
        });

        getProduct('123', function (result) {
            expect(result).toBe(174);
            done();
        });
    });  */

    var gBot = window.getBrownies;     
    it('should return 174 for kgashok', function (done) {
        expect(gBot.getPoints('kgashok')).toBe(174);
        done();
    });

    /*

    function getProduct(id, callback) {
        $.ajax({
            type: "GET",
            url: "data.json",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: callback
        });
    }

    spyOn($, 'ajax').and.callFake(function(options) {
        options.success();
    });
    var callback = jasmine.createSpy();
    expect(gBot.getPoints('kgashok', callback);
    getProduct ('132', callback); 

    expect(callback).toHaveBeenCalled();
    
    var callback = jasmine.createSpy();
    //gBot.getPoints('kgashok', callback);

    
    getProduct ('123', callback);
    waitsFor(function() {
        return callback.callCount > 0;
    });

    runs(function() {
        expect(callback).toHaveBeenCalled();
    });  */


    
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
