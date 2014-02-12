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
    'jquery', 'backbone', 'router', 'views/app'
], function ($, Backbone, Router, AppView) {



    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Vent: _.extend({}, Backbone.Events),
        Hook: $('#application'),
        Router: Router,

        init: function() {
            new AppView;
            new App.Router();
            Backbone.history.start({pushState:false});
            return this;
        }
    }
    $(document).ready(function() {
        App.init();
    });
    
});
