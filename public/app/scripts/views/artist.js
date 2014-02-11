/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ArtistView = Backbone.View.extend({
    	el: '.artist',
        template: JST['app/scripts/templates/artist.ejs'],
        events: {

        },

        initialize: {

        },
        render: function  () {
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        }
    });

    return ArtistView;
});
