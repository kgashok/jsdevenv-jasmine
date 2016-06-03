/*global $:false */
/*jshint quotmark: false */
/*jshint loopfunc: true */
/*global window */
(function (window) {
    'use strict';

    window.getPoints = {
        strength: function (uname) {
            if (uname.length !== 0) {
                var points = 0;
                var url = 'https://www.freecodecamp.com/api/users/about?username=' + uname.toLowerCase();

                // console.log("**** URL " + url);

                $.ajax({
                    type: 'GET',
                    url: url,
                    //data:data,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        //Do stuff with the JSON data
                        //if (typeof data !== undefined) {
                            points = data.about.browniePoints;
                            // points = 310;
                        // }
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