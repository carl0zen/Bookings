/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/artists'
], function ($, _, Backbone, JST, Artists) {
    'use strict';

    var ArtistsView = Backbone.View.extend({
        
        el: '#artists',
        
        template: JST['app/scripts/templates/artists.ejs'],
        
        events: {

        },

        initialize: {
        	this.artists = new Artists();
        	this.artists.bind('all', this.render, this);
        	this.artists.fetch();
        	console.log(this.artists);
        },
        render: function  () {
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        }
    });

    return ArtistsView;
});
