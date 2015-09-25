'use strict';

var path            = require('path');
var url             = require('url');

module.exports = function (sails) {

    return {

        defaults: {

        },

        configure: function(){

        },

        initialize: function (cb) {

            this.routes = getRoutes();

            return cb();
        },

    };

    function getRoutes(){
        return {
            before: {
                '/ping': function (req, res, next) {
                    return res.ok();
                }
            }
        };
    }
};


