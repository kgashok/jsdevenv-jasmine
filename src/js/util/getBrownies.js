/*global $:false */
/*jshint quotmark: false */
/*jshint loopfunc: true */
/*global window*/
(function (window) {
    'use strict';

    window.getBrownies = {
        getPoints: function (uname) {
            if (uname.length !== 0) {
                var points = 0;
                var url = 'https://www.freecodecamp.com/api/users/about?username=' + uname.toLowerCase();

                console.log("**** URL " + url);

                $.ajax({
                    type: 'GET',
                    url: url,
                    //data:data,
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        //Do stuff with the JSON data
                        if (typeof (data) !== 'undefined') {
                            points = data.about.browniePoints;
                        }
                    },
                    error: function ( /* xhr, textStatus, errorThrown */ ) {
                        points = 0;
                    }
                });

                return points;

            } else {
                return 0;
            }

        }
    };

})(window);