/* global $:false, console, jasmine, setTimeout, done, spyOn, describe, it, expect */
//jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('util/getBrownies', function () {
    'use strict';


    it("successful ajax request", function(done) {
      // console.log ("Success!!!");

      function getProduct (id, callback) { 
        var url = 'https://www.freecodecamp.com/api/users/about?username=kgashok'; 

        // expected data 
        // {"about":{"username":"kgashok","browniePoints":174,"bio":""}}

        $.ajax({
          type: 'GET',
          url: url,
          contentType: "application/json; charset=utf-8",
          // async: false,
          dataType: 'json',
          success: callback, 
          error: function (xhr, textStatus, errorThrown ) {
            console.log ("ERROR **** " + xhr + textStatus + errorThrown );
            expect(0).toBe(1); 
            // points = 0;
          },

        });
      } 

      /*spyOn($, 'ajax').and.callFake(function (options) {
        options.success(174);
      }); */

      getProduct ('kgashok', function (data) {
        console.log ("Success!!! " + data); 
        points = data.about.browniePoints;
        expect(points).toBe(174);
        done();
      });


    });

});

    /*beforeEach(function(done) {
        setTimeout(function() {
          value = 0;
          done();
        }, 1);
      }); 
    */

    /*it('length-zero user name', function (done) {
        //expect (1).toBe(2);
        //expect(gBot.getPoints('').toBe(0) );
        value++;
        expect(value).toBeGreaterThan(0);
        done(); 
    });*/
  

    /*
    it('should return 174 for kgashok', function (done) {
        var url = 'https://www.freecodecamp.com/api/users/about?username=kgashok';

        console.log("**** URL " + url);

        function getProduct (id, callback) {
            $.ajax({
                type: 'GET',
                url: 'https://www.freecodecamp.com/api/users/about?username=kgashok',
                async: false,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: callback
            });
        }
            
        spyOn($, 'ajax').and.callFake(function (options) {
            options.success(184);
        });

        getProduct('123', function (result) {
            if (typeof (result) !== 'undefined') {
                console.log ("***** data: " + result); 
                //expect(data.about.browniePoints).toBe(174);
                expect(result).toBe(184);
                done(); 
            }
        });
    }); 
    */


    /*it('should return 174 for kgashok', function (done) {
        var gBot = window.getBrownies;
        var val  = gBot.getPoints('kgashok'); 

        expect (val).toBe(174); 
        done();
    }); */



    /*
    it('should return 174 for kgashok', function (done) {
        var val = gBot.getPoints('kgashok'); 
        setTimeout (function() {
            expect(val).toBe(174); 
            done();
        } );
    });
    */


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
