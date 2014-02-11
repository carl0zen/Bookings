/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var StagemenuView = Backbone.View.extend({
        template: JST['app/scripts/templates/StageMenu.ejs']
    });

    return StagemenuView;
});
