/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ArtistModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return ArtistModel;
});
