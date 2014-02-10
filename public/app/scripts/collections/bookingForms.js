/*global define*/

define([
    'underscore',
    'backbone',
    'models/bookingForms'
], function (_, Backbone, BookingformsModel) {
    'use strict';

    var BookingformsCollection = Backbone.Collection.extend({
        model: BookingformsModel
    });

    return BookingformsCollection;
});
