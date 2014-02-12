/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
        	'': 'home',
        	'artist/create': 'newArtist',
        	'artist/:id': 'loadArtist',
        	'artists': 'loadArtists'
        },
        home: function  () {
        
        	App.Vent.trigger('LoadAppView');
        },
        newArtist: function  () {
        	App.Vent.trigger('CreateArtist');		
        },
        loadArtist: function  (id) {
        	App.Vent.trigger('RenderArtist', id);
        },
        loadArtists: function  () {
        	App.Vent.trigger('RenderArtists');
        }

    });

    return Router;
});
