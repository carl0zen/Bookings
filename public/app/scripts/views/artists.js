/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ArtistsView = Backbone.View.extend({
        template: JST['app/scripts/templates/artists.ejs']
    });

    return ArtistsView;
});
