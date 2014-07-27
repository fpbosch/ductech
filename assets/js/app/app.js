define([
      'angular',
      'angular.route', 
      './controllers/index',
      './services/index',
      './directives/index',
      './filters/index'
  ], function (ng) {
      'use strict';
    
     return ng.module('app', [
         'ngRoute',
         'app.controllers',
         'app.services'
     ]);
});
