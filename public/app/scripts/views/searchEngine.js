/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';
    var SearchengineView = Backbone.View.extend({
        template: JST['app/scripts/templates/searchEngine.ejs'],
        el: '.searchEngine',
        initialize: function() {
        	this.render();
        },
        render: function  (attr) {
        	this.$el.html(this.template);
        	return this;
        }
    });

    return SearchengineView;
});
