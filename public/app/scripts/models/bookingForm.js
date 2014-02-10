/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var BookingformModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return BookingformModel;
});
