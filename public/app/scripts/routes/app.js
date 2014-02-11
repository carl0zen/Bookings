/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
        	'': 'home',
        	'artists': 'artists'
        },
        home: function  () {
        	console.log('home');
        },
        artists: function  () {
        	console.log('artists list');
        	App.Vent.trigger('RenderArtists');
        }

    });

    return Router;
});
