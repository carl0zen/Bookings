/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        crossdomain: '../bower_components/backbone.crossdomain/Backbone.CrossDomain'
    }
});


require([
    'jquery', 'backbone', 'routes/app', 'views/app'
], function ($, Backbone, Router, AppView) {

    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Vent: _.extend({}, Backbone.Events),
        Hook: $('#application'),
        Router: Router,

        init: function() {
            new App.Router();
            Backbone.history.start();
            new AppView;
        }
    }
    $(document).ready(function() {
        App.init();
    });
    
});
