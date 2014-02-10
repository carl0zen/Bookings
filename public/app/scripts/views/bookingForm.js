/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BookingformView = Backbone.View.extend({
        template: JST['app/scripts/templates/bookingForm.ejs']
    });

    return BookingformView;
});
